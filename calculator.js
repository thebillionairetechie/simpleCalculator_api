const express = require("express");
const router = express.Router();
const {
  add,
  subtract,
  multiply,
  divide,
} = require("../controller/calculatorController.js");

// Routes for calculator operations
router.post("/add", add);
router.post("/subtract", subtract);
router.post("/multiply", multiply);
router.post("/divide", divide);

module.exports = router;
