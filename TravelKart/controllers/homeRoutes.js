// const router = require('express').Router();
// const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');

// const { User, Location } = require('../models');
// //const withAuth = require('../utils/auth');

// router.get('/',  async (req, res) => {
//   try {
//     const projectData = await Project.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });
//     const users = userData.map((location) => location.get({ plain: true }));
//     //const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/homepage'); //this line is redirecting user to home page
//     return;
//   }

//   res.render('login');
// });

// router.get('/results', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/results');
//     return;
//   }

//   res.render('results');
// });

// router.get('/results/id:', async (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//  try {
//    const tripData = await Location.findByPk(req.params.id, {
//     include: [
//       { model: Location,
//       attributes: ['trip_id'],
//       },
//   ],
//   });
//   console.log(tripData);
//   const location = tripData.get({ plain: true});

//   res.render('results', {
//       ...location,
//   logged_in: req.session.logged_in 
//   });
// } catch (err) {
//       res.status(500).json(err);
// }
// });


// module.exports = router;

const router = require('express').Router();
const { Results, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    const resultData = await Results.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const results = resultData.map((result) => result.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      results, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/result/:id', async (req, res) => {
  try {
    const resultData = await Result.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const result = resultData.get({ plain: true });

    res.render('result', {
      ...result,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
