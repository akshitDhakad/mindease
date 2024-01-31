const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./configs/config.env" });
const PORT = process.env.PORT || 5000;
const app = express();
const mongoDbKey =
  process.env.MONGO_DB_KEY || "mongodb://127.0.0.1:27017/mindease";


const pagesRoutes = require("./src/routes/pagesRoutes");
const authRoutes = require("./src/routes/authRoutes");
const authenticateMiddleware = require("./src/middlewares/authMiddleware");


// Set up the templating engine (assuming EJS)
// Set up the templating engine (assuming EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
// middlewares
app.use(cors());
app.use(express.json());

// mongoose // connecting to database

mongoose
  .connect(mongoDbKey)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error.message);
  });

// Routes
// Use the routes
app.use('/', pagesRoutes);
app.use('/auth', authRoutes);


// server

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
