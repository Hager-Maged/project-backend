const User = require("../model/user");

const validateSignup = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields <<username, email, password>> are required",
      data: null,
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
      data: null,
    });
  }

  next();
};

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({
        message: "Email already registered",
        data: null,
      });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error", data: null });
  }
};

const checkUsername = async (req, res, next) => {
  const { username } = req.body;
  try {
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({
        message: "Username already taken",
        data: null,
      });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error", data: null });
  }
};

module.exports = { validateSignup, checkEmail, checkUsername };
