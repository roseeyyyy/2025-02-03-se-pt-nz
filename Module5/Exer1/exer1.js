const express = require("express")
// const app = require('./port1');
// const port1 = require('./port1');
// const port2 = require('./port2');
// const port3 = require('./port3');

// Start Server 1
const server1 = express()
const port1 = 3000
server1.get('/', (req, res) => {
  res.send("Hello from Server1")
})
server1.listen(port1, () => {
  console.log(`Server 1 running on http://localhost:${port1}`);
  // res.send(`Hello from port ${port}`)
});

// Start Server 2
const server2 = express()
const port2 = 3001
// const port2 = 3001
server2.get('/', (req, res) => {
  res.send("Hello from Server2")
})
server2.listen(port2, () => {
  console.log(`Server 2 running on http://localhost:${port2}`);
  // res.send(`Hello from port ${port}`)
});

// // Start Server 3
const server3 = express()
const port3 = 3002
// const port3 = 3002
server3.listen(port3, () => {
  console.log(`Server 3 running on http://localhost:${port3}`);
});

server3.get('/', (req, res) => {
  res.send("Hello from Server 3!");
});
