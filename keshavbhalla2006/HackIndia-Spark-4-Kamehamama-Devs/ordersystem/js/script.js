// Initialize empty cart
let cart = [];

// Add items to cart
function addToCart(item, price) {
    cart.push({ item, price });
    alert(item + ' added to cart!');
    updateCartTotal();
    displayCartItems();  // Display the updated cart items
    updateCartCount();   // Update the cart item count
}

// Update the cart total price
function updateCartTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    document.getElementById('cart-total').innerText = total;
}

// Update the cart item count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';  // Clear previous items
    cart.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.innerText = `${item.item} - ₹${item.price}`;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Place order (just a simple example)
function placeOrder() {
    if (cart.length > 0) {
        alert('Order placed successfully!');
        cart = [];  // Clear the cart
        displayCartItems(); // Clear displayed items
        updateCartTotal(); // Reset total
        updateCartCount(); // Reset item count
    } else {
        alert('Your cart is empty!');
    }
}

// Login function (simple demonstration)
function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Just a simple check for demo purposes
    if (email === 'user@example.com' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'index.html';  // Redirect to home after login
    } else {
        alert('Invalid login credentials');
    }
}

// Example of basic search function
document.querySelector('button').addEventListener('click', function() {
    let searchQuery = document.querySelector('input').value;
    alert('You searched for: ' + searchQuery);
    // Implement search functionality here
});

// Load cart items when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    updateCartTotal(); // Initialize total on load
    displayCartItems(); // Display items if any
});
