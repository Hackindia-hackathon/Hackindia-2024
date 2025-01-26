const socket = io();

const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');

chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && chatInput.value.trim() !== '') {
        const message = chatInput.value;
        socket.emit('message', message);
        chatInput.value = '';
        addMessage('You', message);
    }
});

socket.on('message', (message) => {
    addMessage('Other', message);
});

function addMessage(user, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = ${user}: ${message};
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}