const router = require('express').Router();
const { User, Location } = require('../models');
//const withAuth = require('../utils/auth');

//withAuth,
router.get('/',  async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ['password'] },
    //   order: [['name', 'ASC']],
    // });
    // const users = userData.map((location) => location.get({ plain: true }));
    //const users = userData.map((project) => project.get({ plain: true }));

    res.render('dashboard', {
      // users,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/results', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/results');
    return;
  }

  res.render('results');
});

router.get('/results/id:', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
 try {
   const tripData = await Location.findByPk(req.params.id, {
    include: [
      { model: Location,
      attributes: ['trip_id'],
      },
  ],
  });
  console.log(tripData);
  const location = tripData.get({ plain: true});

  res.render('results', {
      ...location,
  logged_in: req.session.logged_in 
  });
} catch (err) {
      res.status(500).json(err);
}
});


module.exports = router;