const User = require("../../model/user");

const getTopContributors = async (req, res) => {
  try {
    const users = await User.find();
    users.sort((a, b) => b.points - a.points);
    const topUsers = users.slice(0, 5);

    res.status(200).json({ message: "Top contributors", data: topUsers });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

module.exports = getTopContributors;
