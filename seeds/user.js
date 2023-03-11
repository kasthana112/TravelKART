const { User } = require('../models');

const userdata = [
    {
      "name": "Larry",
      "email": "test@gmail.com",
      "password": "password"  
    },
    {
      "name": "Harry",
      "email": "test2@gmail.com",
      "password": "password"
    }
]

const seedUserData = () => User.bulkCreate(userdata);
module.exports = seedUserData;