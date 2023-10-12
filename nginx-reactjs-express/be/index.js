const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Dockerized Node.js App with Nodemon!');
});

app.post('/add', (req, res) => {
    // Get the two numbers from the request body
    const { num1, num2 } = req.body;

    // Check if both numbers are provided
    if (num1 === undefined || num2 === undefined) {
      return res.status(400).json({ error: 'Both numbers must be provided in the request body' });
    }

    // Calculate the sum
    const sum = num1 + num2;

    // Return the result as JSON
    res.json({ result: sum });
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
