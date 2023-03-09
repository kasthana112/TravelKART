const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
{
   trip_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
   destination: {
    type: DataTypes.STRING,
    allowNull: false
    },
   traveler_age: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
   traveler_gender: {
    type: DataTypes.STRING,
    allowNull: false
    },
   traveler_nationality: {
    type: DataTypes.STRING,
    allowNull: false
    },
   accommodation_type: {
    type: DataTypes.STRING,
    allowNull: false
    },
   accommodation_cost: {
    type: DataTypes.STRING,
    allowNull: false
    },
   transportation_type: {
    type: DataTypes.STRING,
    allowNull: false
    },
   transportation_cost: {
     type: DataTypes.STRING,
     allowNull: false
    },
},
{   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'location'
}
);

module.exports = Location;