const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const dataPath = path.join(__dirname, "../data/restaurantData.json");
    const data = await fs.promises.readFile(dataPath, "utf8");
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    res.status(500).json({ message: "Error loading restaurant data" });
  }
});

module.exports = router; 