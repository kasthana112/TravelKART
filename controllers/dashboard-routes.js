const router = require('express').Router();
const { User, Location } = require('../models');
//const withAuth = require('../utils/auth');

//withAuth,
router.get('/:destination',  async (req, res) => {
  console.log("hello");
  try {
 const locationData = await Location.findAll({
  where:{
    destination: req.params.destination
  }
 })

 const locData = locationData.map((location) =>location.get({plain: true}));
 console.log(locData);
 res.json(locData);

    // res.render('dashboard', {
    //   locData,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', (req,res) => {
res.render('dashboard');
})

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