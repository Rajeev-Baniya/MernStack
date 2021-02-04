const express = require("express");
const router = express.Router();

//@route Get api/Public
//desc Test route
//@access Public

router.get("/", (req, res) => {
  res.send("Public route");
});

module.exports = router;
