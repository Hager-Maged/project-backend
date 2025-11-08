const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

require("dotenv").config();

const port = process.env.port;
const URL = process.env.DB_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("testing");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).json("testing");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
