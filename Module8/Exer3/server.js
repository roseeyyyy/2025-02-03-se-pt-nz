const express = require('express');
const connection = require('./bloggingApp');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node + MySQL');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
