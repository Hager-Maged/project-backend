const express = require("express");
const { default: mongoose } = require("mongoose");

const { deleteBug } = require("../controllers/profile-controllers/delete-bug");
const { getMyBugs } = require("../controllers/profile-controllers/get-my-bugs");
const update_bug = require("../controllers/profile-controllers/update-bug");


const router = express.Router();

router.get("/mybugs/:userId", getMyBugs);

router.delete("/bug/:Id", deleteBug);

router.patch("/bug/:Id" , update_bug);

module.exports = router;
