const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const multer = require("multer");
const upload = multer();

router.post("/register", upload.none(), authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router;
