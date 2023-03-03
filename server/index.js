const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const cors = require("cors");
const cities = require("cities.json");
const app = express();
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  })
);
const PORT = process.env.PORT || 3000;

app.get("/cities", (req, res) => {
  const tenIndianCities = cities
    .filter((city) => {
      return city.country === "IN";
    })
    .slice(0, 10);
  res.status(200).send(tenIndianCities);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello User");
});

app.listen(PORT, () => {
  console.log("Server started at port", PORT);
});
