const mongoose = require("mongoose");

const reply = new mongoose.Schema({
  replier: { type: String, required: true },
  email: { type: String, required: true },
  time: { type: String, required: true },
  content: { type: String, required: true },
  likesCount: { type: Number, default: 0 },
});

const bug_model = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    title: { type: String, required: true },
    caption: { type: String },
    description: { type: String },
    votes: { type: Number, default: 0 },
    replies: { type: Number, default: 0 },
    replyDetails: [reply],
    views: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
    state: { type: String, default: "unsolved" },
    tags: [{ type: String }],
    author: { type: String, required: true },
    sort: { type: String, default: "recent" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Bug", bug_model);
