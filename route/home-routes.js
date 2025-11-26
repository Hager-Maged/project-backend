const express = require("express");
const router = express.Router();

const getTrendingCategories = require("../controllers/home-controllers/get-trending-categories");
const getTopContributors = require("../controllers/home-controllers/get-top-contributors");
const getBugOfTheWeek = require("../controllers/home-controllers/get-bug-of-the-week");
const { default: mongoose } = require("mongoose");
const {add_bug} = require("../controllers/home-controllers/add-bug");
const get_one_bug = require("../controllers/home-controllers/get-one-bug");

router.get("/get-trending-categories", getTrendingCategories);
router.get("/get-top-contributors", getTopContributors);
router.get("/get-bug-of-the-week", getBugOfTheWeek);


router.post("/add_bug" , add_bug);
router.get("/get_bug/:_id" , get_one_bug)

module.exports = router

