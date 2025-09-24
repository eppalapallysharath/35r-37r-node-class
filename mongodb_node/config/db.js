const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongo = new MongoClient(process.env.mongoURI);

let db;
let dbName = "emp_db";

async function connectDB() {
  try {
    await mongo.connect();
    db = mongo.db(dbName);
    console.log("mongodb database is connected");
    return db;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectDB };
