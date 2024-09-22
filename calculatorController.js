// @desc POST performs arithmetic calculations
// @route POST /calculator
// @access Public

// Addition Endpoint
const add = async (req, res) => {
  const { num1, num2 } = req.body;

  // Verifying the inputs
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({ message: "Both inputs must be numbers." });
  }

  const result = num1 + num2;
  return res
    .status(200)
    .json({ message: "Valid inputs.\nThis is your result:", result });
};

// Subtraction Endpoint
const subtract = async (req, res) => {
  const { num1, num2 } = req.body;

  // Verifying the inputs
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({ message: "Both inputs must be numbers." });
  }

  const result = num1 - num2;
  return res
    .status(200)
    .json({ message: "Valid inputs.\nThis is your result:", result });
};

// Multiplication Endpoint
const multiply = async (req, res) => {
  const { num1, num2 } = req.body;

  // Verifying the inputs
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({ message: "Both inputs must be numbers." });
  }

  const result = num1 * num2;
  return res
    .status(200)
    .json({ message: "Valid inputs.\nThis is your result:", result });
};

// Division Endpoint
const divide = async (req, res) => {
  const { num1, num2 } = req.body;

  // Check if inputs are provided
  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({ message: "Both inputs must be provided." });
  }

  // Switch case for various validations
  switch (true) {
    case typeof num1 !== "number" || typeof num2 !== "number":
      return res.status(400).json({ message: "Both inputs must be numbers." });

    case num2 === 0: // Check for division by zero
      return res
        .status(400)
        .json({ message: "Division by zero is not allowed." });

    default:
      const result = num1 / num2;
      return res.status(200).json({
        message: "Division successful.\nThis is your result:",
        result: result,
      });
  }
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
