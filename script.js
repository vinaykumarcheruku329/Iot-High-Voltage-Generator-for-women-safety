function login() {

    let username = document.querySelector('input[type="text"]').value;

    let password = document.querySelector('input[type="password"]').value;

    let correctUsername = "vinaykumar";

    let correctPassword = "9848";

    if(username === correctUsername && password === correctPassword) {

        alert("Login Successful");

        window.location.href = "dashboard.html";

    }
    else {

        alert("Invalid Username or Password");
    }
}