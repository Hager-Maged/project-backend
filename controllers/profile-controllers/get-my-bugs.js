const bug = require("../../model/bug");

const getMyBugs = async (req, res) => {
  try {
    const bugs = await bug.find({ userId: req.params.userId });
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMyBugs };
