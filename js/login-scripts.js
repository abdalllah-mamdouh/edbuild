// scripts.js

// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Show';
    }
}

// Form Submission Handling
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Simulate Login Validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        window.location.href = "pages/dashboard.html"; // Replace with actual redirect
    } else {
        alert("Invalid Credentials! Please try again.");
    }
});

// Forgot Password Link
document.getElementById('forgotPassword').addEventListener('click', function () {
    alert("A password recovery link has been sent to your registered email.");
});
