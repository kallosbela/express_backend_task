const mysql = require("mysql2");

// MySQL configuration
const db = mysql.createConnection(process.env.DB_URL);

db.connect((err) => {
  if (err) {
    console.error("Unable to connect to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db