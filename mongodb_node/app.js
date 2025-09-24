const express = require("express");
const app = express();
require("dotenv").config();
const { connectDB } = require("./config/db.js");

let mongodb;
async function dbConnection(params) {
  mongodb = await connectDB();
}
dbConnection();

app.use(express.json());
app.use(express.urlencoded(true));

app.get("/", (req, res) => {
  res.send("server is healthy");
});

app.get("/employee", async (req, res) => {
  const data = await mongodb.collection("users").find().toArray();
  res.send(data);
});

app.post("/addEmployee", async (req, res) => {
  const data = await mongodb.collection("us").insertOne(req.body);

  res.status(201).json({ message: "user added successfully", data });
});

const port = process.env.port;
app.listen(port, () => console.log("server started on por " + port));
