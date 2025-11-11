const bug = require("../../model/bug");

const add_bug = async (req, res) => {
  try {
    const {
      categoryName,
      title,
      caption,
      description,
      votes,
      replies,
      replyDetails,
      views,
      state,
      tags,
      author,
      sort,
      snippit,
    } = req.body;
    const newBug = new bug({
      categoryName,
      title,
      description,
      snippit,
      tags,
      author,
    });
    await newBug.save();

    const data = {
        status : 201,
        message : "Bug Added Successfully",
        bug : newBug,
    }
    res.status(201).json(data);
  } catch (err) {
    const message = {
        status : 500, 
        error : err.message,
    }
    res.status(500).json(message);
  }
};

module.exports = { add_bug };
