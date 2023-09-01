const mysql = require("mysql2");
const dotenv = require('dotenv').config();

// MySQL configuration

const db_url = `${{DB_URL}}`;
const db = mysql.createConnection(db_url);

db.connect((err) => {
  if (err) {
    console.error("Unable to connect to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db