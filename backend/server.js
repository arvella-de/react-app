const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const signupRoute = require("./routes/signup");
 
const app = express();
 
// Middleware: allow frontend requests and parse JSON bodies
app.use(cors());
app.use(express.json());
 
// Register the signup route
app.use("/signup", signupRoute);
 
const client = new MongoClient("mongodb://127.0.0.1:27017");
 
async function start() {
  await client.connect();
 
  app.locals.users = client.db("class_demo").collection("users");
 
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}
 
start().catch(console.error);
