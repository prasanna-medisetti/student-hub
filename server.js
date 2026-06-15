const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(express.static("public"));


app.post("/register", (req, res) => {

    const {
        fullName,
        email,
        phone,
        password,
        college,
        course
    } = req.body;

    const sql =
    "INSERT INTO users (full_name, email, phone, password, college, course) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql,
        [fullName, email, phone, password, college, course],
        (err, result) => {

            if(err){
                console.log("DB ERROR:", err.message);
                return res.json({
                    message: err.message
                });
        }

            res.json({
                message: "Registration Successful"
            });

        }
    );

});

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {

        if(err){
            console.log(err);
            return res.json({ message: "Login Failed" });
        }

        if(result.length > 0){
            res.json({
                message: "Login Successful",
                user: result[0]
            });
        } else {
            res.json({
                message: "Invalid Credentials"
            });
        }

    });

});

// ➤ Add Course
app.post("/addCourse", (req, res) => {

    const { email, course } = req.body;

    db.query(
        "INSERT INTO user_courses (user_email, course_name) VALUES (?, ?)",
        [email, course],
        (err) => {
            if(err){
                return res.json({message:"Error"});
            }
            res.json({message:"Added"});
        }
    );

});


// ➤ Get Courses
app.get("/getCourses", (req, res) => {

    const email = req.query.email;

    db.query(
        "SELECT * FROM user_courses WHERE user_email=?",
        [email],
        (err, result) => {
            res.json(result);
        }
    );

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});