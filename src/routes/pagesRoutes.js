const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController"); // Adjust the path to where your pagesController is located

// Home page route
router.get("/", pagesController.homePage);

// bookNow page route
router.get("/book-now", pagesController.bookNow);

// servicePage route
router.get("/service", pagesController.servicePage);

// blogPage  route
router.get("/blog", pagesController.blogPage);

// contactPage  route
router.get("/contact-us", pagesController.contactPage);

// Login page route
router.get("/login", pagesController.loginPage);

// Signup page route
router.get("/signup", pagesController.signup);

module.exports = router;
