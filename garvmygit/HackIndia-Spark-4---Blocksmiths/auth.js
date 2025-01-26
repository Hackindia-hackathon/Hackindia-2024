document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('signup-form');

    // Predefined login credentials
    const validEmail = "user@example.com";
    const validPassword = "password123";

    // Validate login form and redirect to home.html
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email === validEmail && password === validPassword) {
            // Simulate successful login and redirect to home.html
            alert('Login successful! Redirecting to home page...');
            window.location.href = 'home.html';  // Redirect to home.html
        } else {
            alert('Invalid login credentials');
        }
    });

    // Validate signup form (No redirection here, just sign-up logic)
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        if (username && validateEmail(email) && password.length >= 6 && password === confirmPassword) {
            alert('Sign-up successful!');
        } else {
            alert('Please check your sign-up details.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
