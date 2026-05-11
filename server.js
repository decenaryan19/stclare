const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const db = new Database('st_clare_college.db');

// Database Setup
db.prepare(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT,
    phone TEXT,
    program TEXT,
    eventFor TEXT,
    message TEXT,
    submittedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

app.use(express.json());
app.use(express.static(__dirname));

// --- ITO ANG CRITICAL PART ---
app.post('/api/register', (req, res) => {
    console.log("May pumasok na registration:", req.body); // Lalabas ito sa terminal
    const { fullName, email, phone, program, eventFor, message } = req.body;

    try {
        const stmt = db.prepare(`
            INSERT INTO registrations (fullName, email, phone, program, eventFor, message)
            VALUES (?, ?, ?, ?, ?, ?)
        `);
        stmt.run(fullName, email, phone, program, eventFor, message);
        res.json({ success: true, message: "Saved successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
    }
});

app.get('/api/admin/registrations', (req, res) => {
    const rows = db.prepare('SELECT * FROM registrations ORDER BY submittedAt DESC').all();
    res.json(rows);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});