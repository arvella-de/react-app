const express = require("express");
const bcrypt = require("bcryptjs");
 
const router = express.Router();
 
router.post("/", async (req, res) => {
  try {
    const { name, username, password } = req.body;
 
    if (!name || !username || !password) {
      return res.status(400).json({ message: "Fill in all fields." });
    }
 
    const passwordHash = await bcrypt.hash(password, 10);
 
    await req.app.locals.users.insertOne({
      name,
      username,
      passwordHash
    });
 
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to save user." });
  }
});
 
module.exports = router;
