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
    categoryName: {
      type: String,
      required: true,
      enum: ["Front-End", "Back-End", "Others"],
    },
    title: { type: String, required: true },
    caption: { type: String },
    description: { type: String, required: true },
    votes: { type: Number, default: 0 },
    replies: { type: Number, default: 0 },
    replyDetails: [reply],
    views: { type: Number, default: 0 },
    state: { type: String, default: "unsolved", enum: ["unsolved", "solved"] },
    status: { type: String, default: "open" },
    tags: [{ type: String }],
    author: { type: String, required: true },
    likes: { type: Number, default: 0 },
    sort: { type: String, default: "recent" },
    snippit: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("bugs", bug_model);
