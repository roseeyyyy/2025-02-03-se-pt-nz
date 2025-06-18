const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rose1201',
  database: 'bloggingapp'
});

// Connect
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL Database!');
});

module.exports = connection;
