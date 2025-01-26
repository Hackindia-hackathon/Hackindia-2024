function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for demonstration (replace with actual authentication logic)
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
        // Redirect to user dashboard on successful login
        window.location.href = 'index.html';
    } else {
        // Show an error message
        document.getElementById('loginMessage').innerText = 'Invalid username or password.';
    }
}
