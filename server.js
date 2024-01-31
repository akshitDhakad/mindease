const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
const app = express();
const mongoDbKey = process.env.MONGO_DB_KEY;

const productRoutes = require("./Routes/productRoutes");

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
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/products", productRoutes);

// server

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
