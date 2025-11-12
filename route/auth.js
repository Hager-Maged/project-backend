const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();

const {
  signin,
  signup,
} = require("../controllers/registration-controllers/auth");
const {
  validateSignup,
  checkEmail,
  checkUsername,
} = require("../middleware/validationRegister");

const { validateSign } = require("../middleware/validationLogin");

router.post("/signin", validateSign, signin);
router.post("/signup", validateSignup,checkUsername, checkEmail, signup);


module.exports = router;
