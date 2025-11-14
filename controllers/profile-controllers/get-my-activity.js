const user = require("../../model/user");
const bug = require("../../model/bug");

const getMyActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await user.findById(id);

    const allBugs = await bug.find({});

    let userReplies = [];

    allBugs.forEach((bug) => {
      bug.replyDetails.forEach((reply) => {
        if (reply.email === user.email) {
          userReplies.push({
            type: "reply",
            bugId: bug._id,
            title: bug.title,
            categoryName: bug.categoryName,
            reply: reply,
            createdAt: reply.time,
          });
        }
      });
    });
    userReplies.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); 
    return res.json({
      status: "success",
      replies: userReplies.slice(0, 10),
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getMyActivity };
