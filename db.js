const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "YOUR_HOST",
    user: "YOUR_USER",
    password: "YOUR_PASSWORD",
    database: "YOUR_DATABASE",
    port: YOUR_PORT
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