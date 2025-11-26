const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();

const port = process.env.port || 4000;
const URL = process.env.DB_URL;

const auth_routing = require("../route/auth");
const profile_routes = require("../route/profile-routes");
const home_routes = require("../route/home-routes");

mongoose
  .connect(URL)
  .then(() => {
    console.log("testing");
  })
  .catch((err) => console.log(err));

app.get("/api/v1", (req, res) => {
  res.status(200).json("testing");
});

app.use("/api/v1/auth", auth_routing);
app.use("/api/v1/profile", profile_routes);
app.use("/api/v1/home", home_routes);

app.use((req, res) =>
  res.status(404).json({ message: "Route not found", data: null })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
