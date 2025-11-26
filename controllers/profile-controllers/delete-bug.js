const bug = require("../../model/bug");

const deleteBug = async (req, res) => {
  try {
    const bugs = await bug.findByIdAndDelete(req.params.Id);
    if (!bugs) return res.status(404).json({ message: "Bug not found" });
    res.json({ message: "Bug deleted successfully " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { deleteBug };
