const registerForm =
document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener(
        "submit",
        async function(e){

        e.preventDefault();

        const fullName =
        document.getElementById("fullName").value;

        const email =
        document.getElementById("email").value;

        const phone =
        document.getElementById("phone").value;

        const password =
        document.getElementById("password").value;

        const confirmPassword =
        document.getElementById("confirmPassword").value;

        const college =
        document.getElementById("college").value;

        const course =
        document.getElementById("course").value;

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        const response = await fetch(
            "/register",
            {
                method:"POST",
                headers:{
                    "Content-Type":
                    "application/json"
                },
                body:JSON.stringify({
                    fullName,
                    email,
                    phone,
                    password,
                    college,
                    course
                })
            }
        );

        const data =
        await response.json();

        alert(data.message);

    });

}

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", async function(e){
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if(data.message === "Login Successful"){

            localStorage.setItem("user", JSON.stringify(data.user));

            window.location.href = "/dashboard.html";

        } else {
            alert(data.message);
        }

    });

}