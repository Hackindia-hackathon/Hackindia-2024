// Sample list of user orders (these would typically be fetched from a database)
let userOrders = [
    { orderId: 1, restaurant: 'SINDHI SWEETS', items: ['Noodles', 'Chole Bhature'], totalAmount: 350, delivered: true },
    { orderId: 2, restaurant: 'TOSHIB', items: ['Chaap', 'Naan'], totalAmount: 230, delivered: true },
];

// Function to load orders and add rating functionality
function loadUserOrders() {
    const ordersDiv = document.getElementById('user-orders');
    ordersDiv.innerHTML = ''; // Clear the orders list

    // Loop through user orders and display them
    userOrders.forEach(order => {
        let orderDiv = document.createElement('div');
        orderDiv.classList.add('order');

        // Create order content
        orderDiv.innerHTML = `
            <h3>Order ID: ${order.orderId}</h3>
            <p>Restaurant: ${order.restaurant}</p>
            <p>Items: ${order.items.join(', ')}</p>
            <p>Total Amount: ₹${order.totalAmount}</p>
            ${order.delivered ? '<p>Order Delivered</p>' : '<p>Order Not Delivered Yet</p>'}
            <div class="rating">
                <span>Rate Delivery: </span>
                <span class="stars" id="stars-${order.orderId}">
                    <i class="star" onclick="rateOrder(${order.orderId}, 1)">☆</i>
                    <i class="star" onclick="rateOrder(${order.orderId}, 2)">☆</i>
                    <i class="star" onclick="rateOrder(${order.orderId}, 3)">☆</i>
                    <i class="star" onclick="rateOrder(${order.orderId}, 4)">☆</i>
                    <i class="star" onclick="rateOrder(${order.orderId}, 5)">☆</i>
                </span>
            </div>
        `;

        // Append to the orders list
        ordersDiv.appendChild(orderDiv);
    });
}

// Function to rate the order and store rating
function rateOrder(orderId, rating) {
    alert(`You rated order ${orderId} with ${rating} stars.`);
    // Store the rating (In real-world, this would be sent to the server)
    userOrders = userOrders.map(order =>
        order.orderId === orderId ? { ...order, rating } : order
    );

    // Send the rating to the delivery boy dashboard (simplified example using localStorage)
    localStorage.setItem(`rating-${orderId}`, rating);

    // Update the displayed stars
    let starsDiv = document.getElementById(`stars-${orderId}`);
    let stars = starsDiv.getElementsByClassName('star');
    for (let i = 0; i < stars.length; i++) {
        stars[i].innerText = i < rating ? '★' : '☆';
    }
}

// Load user orders on page load
document.addEventListener('DOMContentLoaded', loadUserOrders);
