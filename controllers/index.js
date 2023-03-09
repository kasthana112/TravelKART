const router = require('express').Router();
//const Student = require('../models/student');

// router.get('/', async (req, res) => {
//     try {
//         // const stuList = await Student.findAll();
//         // const students = stuList.map(stu => stu.get({ plain: true }))
//         res.render('homepage', { students })
//         //res.render('homepage');
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

function createUser(username, password) {
  // Check for duplicates
  if (existingUsernames.includes(username)) {
    console.error('Username already taken');
    return;
  }

  // Sanitize the input
  username = username.replace(/[^a-zA-Z0-9]/g, '');

  // Create the user in the database
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
    } else {
      console.log('User created successfully');
    }
  });
}


router.get('/', (req, res) => {
    res.render('homepage');
  });




  module.exports = router;