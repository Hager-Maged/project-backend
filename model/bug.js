const mongoose = require("mongoose");

const bug_model = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: String, default: "open" },
    likes: { type: Number, default: 0 },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bugs", bug_model);
