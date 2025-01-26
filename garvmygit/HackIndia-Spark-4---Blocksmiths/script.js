// Sample device data for demonstration purposes
let devices = [
    { id: '1', name: 'Living Room Light', status: 'Off' },
    { id: '2', name: 'Temperature Sensor', status: 'Normal' },
];

// Function to display devices
function displayDevices() {
    const deviceList = document.getElementById('device-list');
    deviceList.innerHTML = ''; // Clear existing list

    devices.forEach(device => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${device.name} (ID: ${device.id}) - Status: <span class="device-status">${device.status}</span>
            <button class="btn btn-primary btn-sm" onclick="toggleDevice('${device.id}')">Toggle</button>
        `;
        deviceList.appendChild(li);
    });
}

// Simulate fetching user token balance
function fetchTokenBalance() {
    // Simulating an API call
    const tokenBalance = Math.floor(Math.random() * 100); // Random balance for demonstration
    document.getElementById('token-balance').textContent = `${tokenBalance} Tokens`;
}

// Function to toggle device state
function toggleDevice(deviceId) {
    const device = devices.find(d => d.id === deviceId);
    if (device) {
        device.status = device.status === 'Off' ? 'On' : 'Off';
        displayDevices();
    } else {
        alert('Device not found!');
    }
}

// Handle device control form submission
document.getElementById('control-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const deviceId = document.getElementById('device-id').value;
    const device = devices.find(d => d.id === deviceId);

    if (device) {
        // Simulate controlling the device
        alert(`Controlling ${device.name} (ID: ${deviceId})`);
    } else {
        alert('Device not found!');
    }
});

// Initial load
window.onload = () => {
    displayDevices();
    fetchTokenBalance();
};
