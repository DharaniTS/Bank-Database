const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',  
  database: 'account_db'
});

// API to fetch all accounts
app.get('/all_accounts', (req, res) => {
  const query='SELECT * FROM accounts';
    db.query(
    query,
     (err, results) => {
    if (err) {
         return res.json({ error: err });
    }
    res.json(results);
  });
});

// API to insert an account
app.post('/accounts', (req, res) => {
  const { account_number, name, phone, email, balance } = req.body;
  const query = 'INSERT INTO accounts SET ?';
  db.query(query, { account_number, name, phone, email, balance }, (err, result) => {
    if (err) return res.json({ error: err });
    res.json({ message: 'Account added' });
  });
});

// Start server
app.listen(3001, () => {
  console.log('API server running on port 3001');
});
