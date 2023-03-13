// const User = require('./User');
// const Location = require('./Location');


// User.hasMany(Location, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Location.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// module.exports = { User, Location };

const User = require('./User');
const Result = require('./Result');


User.hasMany(Result, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Result.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Result };
