const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "shuttle.proxy.rlwy.net",
    user: "root",
    password: "your_password_here",
    database: "railway",
    port: 12345
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("MySQL Connected Successfully");
    }
});

module.exports = db;