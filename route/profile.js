const express = require("express");
const router = express.Router();
const updateProfile = require("../controllers/profile-controllers/update-profile");

router.put("/update-profile/:id", updateProfile);

module.exports = router;
