// Sample list of assigned orders
let assignedOrders = [
    { orderId: 1, customer: 'John Doe', items: ['Pizza', 'Coke'], totalAmount: 400 },
    { orderId: 2, customer: 'Jane Smith', items: ['Burger', 'Fries'], totalAmount: 300 },
];

// Token count based on ratings
let totalTokens = 0;

// Function to load and display the assigned orders
function loadOrders() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = ''; // Clear the orders list

    // Loop through assigned orders and display them
    assignedOrders.forEach(order => {
        let orderDiv = document.createElement('div');
        orderDiv.classList.add('order');

        // Get the user rating from localStorage (this simulates receiving the rating from the customer)
        const rating = localStorage.getItem(`rating-${order.orderId}`) || 'Not rated yet';

        // Create order content
        orderDiv.innerHTML = `
            <h3>Order ID: ${order.orderId}</h3>
            <p>Customer: ${order.customer}</p>
            <p>Items: ${order.items.join(', ')}</p>
            <p>Total Amount: ₹${order.totalAmount}</p>
            <p>Customer Rating: ${rating}</p>
            <button onclick="markAsDelivered(${order.orderId}, ${rating})">Mark as Delivered</button>
        `;

        // Append to orders list
        ordersList.appendChild(orderDiv);
    });
}

// Function to mark an order as delivered and update tokens
function markAsDelivered(orderId, rating) {
    if (rating !== 'Not rated yet') {
        const tokensEarned = rating * 10;  // 10 tokens per star
        totalTokens += tokensEarned;

        alert(`Order ${orderId} delivered! You earned ${tokensEarned} tokens.`);
        document.getElementById('token-total').innerText = totalTokens;
    } else {
        alert('Order delivered but no rating yet.');
    }

    // Remove the delivered order from the list
    assignedOrders = assignedOrders.filter(order => order.orderId !== orderId);
    loadOrders();
}

// Load the orders on page load
document.addEventListener('DOMContentLoaded', loadOrders);
