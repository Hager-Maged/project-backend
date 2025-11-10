const mongoose = require("mongoose");


const user_model = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: [true,'User already exists'] },
  password: { type: String, required: true },
  role: { type: String, default: "user", required: true }
}, { timestamps: true });

module.exports = mongoose.model("Users", user_model);