const express = require("express");
const router = express.Router();

const authController = require("../controllers/userController");
const authenticateMiddleware = require("../middleware/authMiddleware");
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router;
