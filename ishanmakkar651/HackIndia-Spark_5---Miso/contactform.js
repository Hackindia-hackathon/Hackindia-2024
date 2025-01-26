document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();

        // Basic validation
        if (name === '' || email === '' || address === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Additional email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Form is valid
        alert('Thank you for contacting us!');

        // Optionally, you can reset the form
        form.reset();
    });
});
