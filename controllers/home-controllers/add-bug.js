const mongoose = require("mongoose");
const bug = require("../../model/bug");
const user = require("../../model/user");

const add_bug = async (req, res) => {
  try {
    const { categoryName, title, description, tags, snippit, userId } = req.body;

    const userDoc = await user.findById(userId);
    if (!userDoc) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    const author = userDoc.username;

    const newBug = new bug({
      categoryName,
      title,
      description,
      snippit,
      tags,
      author,
      userId,
    });

    await newBug.save();

    res.status(201).json({
      status: 201,
      message: "Bug Added Successfully",
      bug: newBug,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err.message,
    });
  }
};

module.exports = { add_bug };
