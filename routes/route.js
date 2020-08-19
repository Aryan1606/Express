const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const User = require("../models/user");

// @route   POST /route/1
// @desc    Register & Display Info
// @access  Public
router.post(
  "/1",
  [
    check("name", "Name is required").not().isEmpty(),
    check("location", "Location is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = new User({
        name: req.body.name,
        location: req.body.location,
      });
      user = await user.save();
      res.render("route/info", { user: user });
    } catch (err) {
      console.log("Inside Catches baby2");
      console.log(err.message);
    }
  }
);

// @route   POST/route/2
// @desc    Show particular document according to the search
// @access  Public
router.post("/2/:id", async (req, res) => {
  let a = req.body.name;
  a = a.toLowerCase();
  const user = await User.findOne({ $or: [{ name: a }, { location: a }] });
  if (user != null) {
    res.render("route/info", { user: user });
  } else {
    let prev = req.params.id;
    prev = await User.findById(prev);
    console.log("Document is not present !");
    res.render("route/notfound", { prev: prev });
  }
});

router.get("/show/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("route/info", { user: user });
});

module.exports = router;
