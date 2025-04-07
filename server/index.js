const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const carRoutes = require("./routes/carRoutes");
app.use("/api", carRoutes);
const vinRoutes = require("./routes/vinRoutes");
const imageRoutes = require("./routes/imageRoutes");
const sequelize = require("./db"); // Import the database connection
const Car = require("./models/Car"); // Import your model

sequelize.sync()
  .then(() => {
    console.log("Database synchronized successfully!");
  })
  .catch((err) => {
    console.error("Error synchronizing the database:", err);
  });

app.use("/api", vinRoutes);
app.use("/api", imageRoutes);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});