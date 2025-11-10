const express = require("express");
const { default: mongoose } = require("mongoose");

const { deleteBug } = require("../controllers/profile-controllers/delete-bug");
const { getMyBugs } = require("../controllers/profile-controllers/get-my-bugs");

const router = express.Router();

router.get("/mybugs/:userId", getMyBugs);

router.delete("/bug/:Id", deleteBug);

module.exports = router;
