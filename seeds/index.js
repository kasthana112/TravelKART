const sequelize = require('../config/connection');
const { User, Location } = require('../models');

const user = require('./user.json');
const travelData = require('./travelData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(user, {
    individualHooks: true,
    returning: true,
  });

  for (const travel of travelData) {
    await Location.create({
      ...travel.location,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();