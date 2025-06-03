const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");
const restaurantRoutes = require("./routes/restaurant");

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API Deliveroo backend !" });
});

app.get("/restaurant", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/deliveroo/menu/paris/3eme-temple/sub-arc-subway-rambuteau?day=today&geohash=u09wj8rk5bqr&time=ASAP",
      {
        headers: {
          Authorization: `Bearer ${process.env.DELIVEROO_API_KEY}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use("/restaurant", restaurantRoutes);

app.listen(8080, () => {
  console.log("🚀 Serveur lancé sur http://localhost:8080");
});
