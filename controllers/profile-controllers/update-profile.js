const User = require("../../model/user");
const bcrypt = require("bcrypt");

const updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = { ...req.body };

    if (updates.skills && typeof updates.skills === "string") {
      updates.skills = updates.skills.split(",").map((s) => s.trim());
    }

    if (updates.oldPassword && updates.newPassword) {
      const user = await User.findById(id);
      if (!user) return res.status(404).json({ message: "User not found" });

      const isMatch = await bcrypt.compare(updates.oldPassword, user.password);
      if (!isMatch)
        return res.status(400).json({ message: "Old password is wrong" });

      const hashed = await bcrypt.hash(updates.newPassword, 10);
      updates.password = hashed;

      delete updates.oldPassword;
      delete updates.newPassword;
    }

    if (updates.deleteAccount === true) {
      await User.findByIdAndDelete(id);
      return res.status(200).json({ message: "Account deleted successfully" });
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    const userData = updatedUser.toObject();
    delete userData.password;
    res.status(200).json({
      message: "Profile updated successfully",
      data: userData,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
};

module.exports = updateProfile;
