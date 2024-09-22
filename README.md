# Calculator API

## Description
This project is a simple Calculator API built using Node.js and Express. It provides endpoints for basic arithmetic operations, including addition, subtraction, multiplication, and division.

## Features
- Perform addition, subtraction, multiplication, and division.
- Validate input to ensure only numbers are processed.
- Handles division by zero gracefully.

API Endpoints
Welcome Message
GET /
Returns a welcome message.
Calculator Operations
POST /calculator/add

Request body: { "num1": <number>, "num2": <number> }
Returns the sum of num1 and num2.
POST /calculator/subtract

Request body: { "num1": <number>, "num2": <number> }
Returns the difference of num1 and num2.
POST /calculator/multiply

Request body: { "num1": <number>, "num2": <number> }
Returns the product of num1 and num2.
POST /calculator/divide

Request body: { "num1": <number>, "num2": <number> }
Returns the quotient of num1 and num2. Handles division by zero.
