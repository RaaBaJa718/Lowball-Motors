const express = require("express");
const axios = require("axios");
const router = express.Router();

// Vehicle Image Route
router.get("/vehicle-images/:year/:make/:model", async (req, res) => {
  const { year, make, model } = req.params;

  try {
    const response = await axios.get(`https://example-vehicle-image-api.com/images`, {
      params: {
        year,
        make,
        model,
      },
      headers: {
        Authorization: `Bearer ${process.env.IMAGE_API_KEY}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching vehicle images:", error.message);
    res.status(500).json({ error: "Failed to fetch vehicle images" });
  }
});

module.exports = router;