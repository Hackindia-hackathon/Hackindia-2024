import os
import hashlib

def split_file(file_path, chunk_size):
    file_chunks = []
    with open(file_path, 'rb') as f:
        while True:
            chunk = f.read(chunk_size)
            if not chunk:
                break
            file_chunks.append(chunk)
    return file_chunks

def hash_chunk(chunk):
    return hashlib.sha256(chunk).hexdigest()

# Example of splitting a file
file_path =  r'C:\Users\Md Naiyar Imam\decentralized-storage\storage'  # Replace with your file path
chunk_size = 1024  # 1 KB
chunks = split_file(file_path, chunk_size)

for i, chunk in enumerate(chunks):
    print(f"Chunk {i}: {hash_chunk(chunk)}")  # Print the hash of each chunk
