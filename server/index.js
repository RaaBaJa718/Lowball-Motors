const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Create the app instance at the top
const app = express();

// Import routes and models
const carRoutes = require("./routes/carRoutes");
const imageRoutes = require("./routes/imageRoutes");
const sequelize = require("./db"); // Import the database connection
const Car = require("./models/Car"); // Import your model

// Sync the database
sequelize.sync()
  .then(() => {
    console.log("Database synchronized successfully!");
  })
  .catch((err) => {
    console.error("Error synchronizing the database:", err);
  });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Register routes
app.use("/api", carRoutes);
app.use("/api", imageRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});