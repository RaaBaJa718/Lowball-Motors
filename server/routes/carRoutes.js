const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

// GET route
router.get("/cars", async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

// POST route
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