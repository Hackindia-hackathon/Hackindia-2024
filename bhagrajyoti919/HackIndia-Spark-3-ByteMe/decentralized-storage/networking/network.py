import socket
import threading

def handle_client(client_socket):
    request = client_socket.recv(1024).decode()
    print(f"Received: {request}")
    client_socket.send("ACK".encode())
    client_socket.close()

def start_server(host='0.0.0.0', port=9999):
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((host, port))
    server.listen(5)
    print(f"Listening on {host}:{port}")

    while True:
        client_socket, addr = server.accept()
        print(f"Accepted connection from {addr}")
        client_handler = threading.Thread(target=handle_client, args=(client_socket,))
        client_handler.start()

# Start the server
if __name__ == "__main__":
    start_server()
