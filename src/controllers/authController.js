const User = require("../models/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.MINDEASE_KEY || "your_default_secret_key";

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    // Add more validation as needed, e.g., validate email format

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, SECRET_KEY, {
      expiresIn: "1d",
    });
    const userdata = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };
    res.status(201).json({
      success: true,
      message: "Registration successful",
      user: userdata,
      token: token,
    });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ success: false, error: "An error occurred" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1d",
    });
    const userdata = {
      id: user._id,
      isAdmin: user.isAdmin,
      name: user.name,
      email: user.email,
    };
    res.json({
      success: true,
      message: "Login successful",
      user: userdata,
      token: token,
    });
  } catch (error) {
    console.error("Error logging in user:", error.message);
    res.status(500).json({ success: false, error: "An error occurred" });
  }
};
