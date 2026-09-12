
let signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Check if fields are empty
    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill in all fields");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Get users array from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    let emailExists = users.find(function(user) {
        return user.email === email;
    });

    if (emailExists) {
        alert("This email is already registered");
        return;
    }

    // Create new user
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    // Add new user to the array
    users.push(newUser);

    // Save the array in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    // Go to login page
    window.location.href = "./login.html";

});

