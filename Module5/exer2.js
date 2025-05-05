const express = require('express');
const app = express();
const port = 3000;

// Add route
app.get('/calculator/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  res.json({ result: num1 + num2 });
});

// Subtract route
app.get('/calculator/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  res.json({ result: num1 - num2 });
});

// Multiply route
app.get('/calculator/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  res.json({ result: num1 * num2 });
});

// Divide route
app.get('/calculator/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (num2 === 0) {
    res.status(400).json({ error: "Cannot divide by zero" });
  } else {
    res.json({ result: num1 / num2 });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Calculator API running at http://localhost:${port}`);
});
