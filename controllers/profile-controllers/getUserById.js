const User = require("../../model/user"); // استدعاء موديل المستخدم

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password"); // نجيب بيانات المستخدم بدون الباسورد
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User found", data: user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

module.exports = getUserById;
