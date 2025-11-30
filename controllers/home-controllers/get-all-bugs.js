const bug = require("../../model/bug");

const get_all_bugs = async (req, res) => {
  try {
    const bugs = await bug.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(bugs);
  } catch (err) {
    const message = {
      status: 500,
      error: err.message,
    };
    res.status(500).json({ message });
  }
};

module.exports = get_all_bugs;
