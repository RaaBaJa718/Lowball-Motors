const { DataTypes } = require("sequelize");
const sequelize = require("../db"); // Adjust path if needed

const Car = sequelize.define("Car", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Car;