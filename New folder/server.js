const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { connectDB } = require("./config/dbConnection.js");

connectDB();

app.listen(process.env.port, () => {
  console.log("server started on port " + process.env.port);
});
