const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lowball_motors", "postgres", "brycejayce", {
  host: "localhost", // Or your database host
  dialect: "postgres", // Specify PostgreSQL as the dialect
  logging: false, // Disable logging for cleaner console output
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to PostgreSQL successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;