const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Car = sequelize.define("Car", {
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Required field
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  mileage: {
    type: DataTypes.INTEGER, // Optional field
  },
  image: {
    type: DataTypes.STRING, // URL for car image
  },
});

module.exports = Car;