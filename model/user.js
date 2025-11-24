const mongoose = require("mongoose");

const user_model = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    email: {
      type: String,
      required: true,
      unique: [true, "User already exists"],
    },
    password: { type: String, required: true },
    location: { type: String },
    bio: { type: String },
    website: { type: String },
    skills: { type: [String], default: [] },
    theme: { type: String, default: "light" },
    points: { type: Number, default: 0 },
    role: { type: String, default: "user", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", user_model);
