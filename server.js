const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: '185.166.188.154',
    user: 'u815555333_react',
    password: 'Mythtapid_91',
    database: 'u815555333_react'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/data', (req, res) => {
    db.query('SELECT * FROM deneme', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
