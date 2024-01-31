const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.MINDEASE_KEY || "your_default_secret_key";
const User = require("../models/authModel");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decodedToken = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;
