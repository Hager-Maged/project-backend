const Bug = require("../../model/bug");

const getBugOfTheWeek = async (req, res) => {
  try {
    const bugs = await Bug.find();

    if (!bugs || bugs.length === 0) {
      return res.status(404).json({ message: "No bugs found" });
    }

    const bugOfTheWeek = await Bug.findOne().sort({ votes: -1 });

    res.status(200).json({
      message: "Bug of the week",
      data: {
        title: bugOfTheWeek.title,
        description: bugOfTheWeek.description,
        author: bugOfTheWeek.author,
        status: bugOfTheWeek.status,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

module.exports = getBugOfTheWeek;
