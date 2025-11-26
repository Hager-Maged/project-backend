const bug = require("../../model/bug");
const get_one_bug = async (req, res) => {
  try {
    const userBug = await bug.findById(req.params._id);
    const message = {
      status: 201,
      bug: userBug,
    };
    res.status(201).json(message);
  } catch (err) {
    const message = {
      status: 500,
      error: err.message,
    };
    res.status(500).json(message);
  }
};

module.exports = get_one_bug;
