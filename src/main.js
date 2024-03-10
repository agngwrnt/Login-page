"use strict";
class Person {
    constructor(Email, fullname, password, user_role) {
        this.Email = Email;
        this.fullname = fullname;
        this.password = password;
        this.user_role = user_role;
    }
}
class Admin extends Person {
    constructor(Email, fullname, password) {
        super(Email, fullname, password, "admin");
    }
}
class User extends Person {
    constructor(Email, fullname, password) {
        super(Email, fullname, password, "user");
    }
}
const admin1 = new Admin("admin@example.com", "Admin One", "adminsatu");
const admin2 = new Admin("admin2@example.com", "Admin Two", "admindua");
const user1 = new User("user@example.com", "User One", "usersatu");
const user2 = new User("user2@example.com", "User Two", "userdua");
const users = [admin1, admin2, user1, user2];
// func loginUser
function loginUser(enteredEmail, enteredPassword) {
    let found = false;
    for (const person of users) {
        if (person.Email === enteredEmail && person.password === enteredPassword) {
            const userType = person instanceof Admin ? "Admin" : "User";
            const time = new Date().toLocaleTimeString();
            console.log(`[${person.Email}|${userType}]: ${person.fullname} logged in at ${time}`);
            alert(`[${person.Email}|${userType}]: ${person.fullname} logged in at ${time}`);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Invalid Email or password");
        alert("Invalid Email or password");
    }
}
;
// event listener login button
const loginButton = document.getElementById("loginButton");
if (loginButton) {
    loginButton.addEventListener("click", function () {
        const enteredEmailInput = document.getElementById("enteredEmail");
        const enteredPasswordInput = document.getElementById("password");
        if (enteredEmailInput && enteredPasswordInput) {
            const enteredEmail = enteredEmailInput.value;
            const enteredPassword = enteredPasswordInput.value;
            if (enteredEmail === "" || enteredPassword === "") {
                console.log("Email or password cannot be empty");
                alert("Email or password cannot be empty");
                return;
            }
            const user = users.find(person => person.Email === enteredEmail);
            if (user) {
                loginUser(enteredEmail, enteredPassword);
            }
            else {
                console.log("User not found");
                alert("User not found");
            }
        }
        else {
            console.error("Email or password input element not found.");
        }
    });
}
else {
    console.error("Login button element not found.");
}
// Handle toggle password visibility
const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");
togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
    else {
        passwordField.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});
