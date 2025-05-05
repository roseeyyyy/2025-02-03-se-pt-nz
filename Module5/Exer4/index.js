const express = require('express');
const app = express();
const friendRoutes = require('./routes/friendRoutes') 

app.use(express.json())
app.use('/', express.static('public'))
app.use('/friends', friendRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
});
