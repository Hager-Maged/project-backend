const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();

const {
  signin,
  signup,
} = require("../controllers/registration-controllers/auth");


router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router;
