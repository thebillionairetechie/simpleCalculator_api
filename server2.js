const express = require("express");
const calculatorRouter = require("./Routes/calculator.js");

const app = express();
const PORT = process.env.PORT || 6001;

// Middleware
app.use(express.json());
app.use("/calculator", calculatorRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Calculator API!");
});

app.listen(PORT, () => {
  console.log(`Server currently running on port ${PORT}..`);
});
