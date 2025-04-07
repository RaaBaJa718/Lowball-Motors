const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables

// Create a connection to the database
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres", // Specify PostgreSQL as the database dialect
  logging: false, // Disable logging (optional)
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;