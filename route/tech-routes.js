const express = require('express');
const { default: mongoose } = require("mongoose");
const get_all_categories=require("../controllers/tech-controllers/get-all-categories");
const get_one_categories=require("../controllers/tech-controllers/get-category")
const route = express.Router();


route.get("/get_all_categories",get_all_categories)
route.get("/get_one_categories/:id",get_one_categories)
module.exports=route