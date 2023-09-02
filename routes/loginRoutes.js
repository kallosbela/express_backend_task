const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { user, password } = req.body;
  console.log("ezt kaptam:", user, password);
  if (user === "pmcode" && password === "titok1234") {
    const jwtToken = jwt.sign({ user }, "secret", { expiresIn: 7200 });
    res.json({ message: "Welcome Back!", token: jwtToken });
  } else {
    res.status(401).json({ message: "Username or password does not match!" });
  }
});

module.exports = router;
