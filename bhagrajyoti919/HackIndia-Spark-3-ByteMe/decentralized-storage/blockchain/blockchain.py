import hashlib
import time

class Block:
    def __init__(self, index, previous_hash, timestamp, data, hash):
        self.index = index
        self.previous_hash = previous_hash
        self.timestamp = timestamp
        self.data = data
        self.hash = hash

def calculate_hash(index, previous_hash, timestamp, data):
    value = f"{index}{previous_hash}{timestamp}{data}"
    return hashlib.sha256(value.encode()).hexdigest()

def create_genesis_block():
    return Block(0, "0", time.time(), "Genesis Block", "0")

def create_new_block(previous_block, data):
    index = previous_block.index + 1
    timestamp = time.time()
    previous_hash = previous_block.hash
    hash = calculate_hash(index, previous_hash, timestamp, data)
    return Block(index, previous_hash, timestamp, data, hash)

# Initialize blockchain
blockchain = [create_genesis_block()]

# Add a new block
new_block = create_new_block(blockchain[-1], "New Storage Deal")
blockchain.append(new_block)

for block in blockchain:
    print(vars(block))
