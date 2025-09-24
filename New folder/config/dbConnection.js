const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("emp_db");
    console.log("database connected");
    const d = await db.collection("employee").find().toArray();
    console.log(d);

    const result = await db.collection("users").insertOne({ nam: "sharath" });
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = { connectDB };
