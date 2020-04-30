const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const Shorten = mongoose.model("Shorten");
const User = mongoose.model("User");

const jwt = require('../auth/middleware')

// Create
router.post("/shortens", async (req, res, next) => {
  try {
    res.json({
      success: true,
      content: await Shorten.create(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

// Read
router.get("/shortens", jwt, async (req, res, next) => {
  try {
    res.json({
      success: true,
      content: await Shorten.find(),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

// Read by
router.get("/shorten", async (req, res, next) => {
  try {
    res.json({
      success: true,
      content: await Shorten.findById(req.query.id),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

// Update
router.put("/shorten", async (req, res, next) => {
  try {
    res.json({
      success: true,
      content: await Shorten.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
      }),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

// Delete
router.delete("/shorten", async (req, res, next) => {
  try {
    res.json({
      success: true,
      content: await Shorten.findByIdAndRemove(req.query.id),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

// Login
router.post("/user", async (req, res, next) => {
  let user = await User.findOne({
    user: req.body.user,
  });
  try {
    if (user && user.checkPassword(req.body.password)) {
      const id = user.id;
      var token = jsonwebtoken.sign(
        {
          id,
        },
        process.env.SECRET,
        {
          expiresIn: 3600, // expires in 1h
        }
      );
      res.json({
        success: true,
        constent: token,
      });
    } else {
      res.json({
        success: false,
        constent: "Login inválido!",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      constent: error.message,
    });
  }
});

module.exports = router;
