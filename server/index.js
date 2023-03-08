const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const cors = require("cors");
const cities = require("cities.json");
const TAFFY = require("taffydb").taffy;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  })
);
const PORT = process.env.PORT || 3000;

let db = TAFFY(
  cities
    .filter((city) => {
      return city.country === "IN";
    })
    .slice(0, 10)
);

app.get("/cities", (req, res) => {
  const tenIndianCities = db().get().reverse();

  res.status(200).send(tenIndianCities);
});

app.post("/add-city", (req, res) => {
  try {
    const { name, country, lat, lng } = req.body;

    db.insert({
      name,
      country,
      lat,
      lng,
    });

    res.status(200).send({ message: "City added successfully" });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get("/", (req, res) => {
  res.status(200).send("Hello User");
});

app.listen(PORT, () => {
  console.log("Server started at port", PORT);
});
