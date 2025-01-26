document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('login-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
  
    // Dummy login data
    const validUsername = "deliveryman";
    const validPassword = "password123";
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Check for valid credentials
      if (username.value === validUsername && password.value === validPassword) {
        loginContainer.classList.add('hidden');
        dashboardContainer.classList.remove('hidden');
        loadDashboard();
      } else {
        alert("Invalid login credentials!");
      }
    });
  
    function loadDashboard() {
      const deliveryData = {
        name: "John Doe",
        walletAddress: "1234-5678-91011",
        walletAmount: 500,
        rating: 4.7,
        onTimeDeliveries: 87,
        goodRatings: 80, // Data for pie chart
        badRatings: 20   // Data for pie chart
      };
  
      // Set the dashboard data
      document.getElementById("deliveryName").textContent = deliveryData.name;
      document.getElementById("walletAddress").textContent = deliveryData.walletAddress;
      document.getElementById("walletAmount").textContent = deliveryData.walletAmount;
      document.getElementById("rating").textContent = deliveryData.rating;
      document.getElementById("onTimeDeliveries").textContent = deliveryData.onTimeDeliveries;
  
      // Load pie chart
      const ctx = document.getElementById('ratingChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Good Ratings', 'Bad Ratings'],
          datasets: [{
            label: 'Ratings Distribution',
            data: [deliveryData.goodRatings, deliveryData.badRatings],
            backgroundColor: ['#28a745', '#dc3545']
          }]
        },
        options: {
          responsive: true
        }
      });
    }
  
    // Redeem rewards functionality
    document.getElementById("redeemButton").addEventListener("click", function () {
      alert("Rewards redeemed successfully!");
    });
  });
  