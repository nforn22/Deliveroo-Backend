const express = require("express");
const cors = require("cors");
// const axios = require("axios");
const dotenv = require("dotenv");
const restaurantRoutes = require("./routes/restaurant");

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Deliveroo API" });
});

app.use("/restaurant", restaurantRoutes);

app.listen(8080, () => {
  console.log("🚀 Server started on port: http://localhost:8080");
});
