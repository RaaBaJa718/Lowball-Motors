const express = require("express");
const axios = require("axios"); // Include axios for API requests
const router = express.Router();
const Car = require("../models/Car");

// GET route with external API call
router.get("/cars", async (req, res) => {
  try {
    // Use the external API to fetch cars
    const response = await axios.get("https://api.freecarsapi.com/cars", {
      headers: {
        Authorization: `Bearer ${process.env.FREE_CARS_API_KEY}`, // Load API key from .env
      },
    });

    // Send the fetched cars back to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching cars from external API:", error.message);
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

// POST route remains unchanged
router.post("/cars", async (req, res) => {
  try {
    const { name, price } = req.body;
    const car = await Car.create({ name, price });
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ error: "Failed to add car" });
  }
});

module.exports = router;