const express = require("express");
const router = express.Router();

const getTrendingCategories = require("../controllers/home-controllers/get-trending-categories");
const getTopContributors = require("../controllers/home-controllers/get-top-contributors");
const getBugOfTheWeek = require("../controllers/home-controllers/get-bug-of-the-week");

router.get("/get-trending-categories", getTrendingCategories);
router.get("/get-top-contributors", getTopContributors);
router.get("/get-bug-of-the-week", getBugOfTheWeek);

module.exports = router;
