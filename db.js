const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "thomas.proxy.rlwy.net",
    user: "root",
    password: "fzvdyPsFllWAiutrwhVgQuBvJQUTuUsC",
    database: "railway",
    port: 25887
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