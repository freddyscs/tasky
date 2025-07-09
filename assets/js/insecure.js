const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tasky'
});

app.get('/user', (req, res) => {
  const username = req.query.username;
  // ❗ Vulnerable to SQL Injection
  const query = `SELECT * FROM users WHERE username = '${username}'`;

  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
