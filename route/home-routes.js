const express = require("express");
const { default: mongoose } = require("mongoose");
const {add_bug} = require("../controllers/home-controllers/add-bug");
const get_one_bug = require("../controllers/home-controllers/get-one-bug");

const router = express.Router();

router.post("/add_bug" , add_bug);
router.get("/get_bug/:_id" , get_one_bug)

module.exports = router

