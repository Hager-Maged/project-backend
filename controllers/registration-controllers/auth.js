const User = require("../../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jwt-encode");

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Incorrect password" });

    const secret_key = process.env.SECRET_KEY;
    const token = jwt({ user }, secret_key);

    res.status(200).json({
      message: "Signin successful",
      data: { token, id: user._id },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      data: { username, email },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Invalid data",
      details: error.errors,
      data: null,
    });
  }
};

module.exports = { signup, signin };
