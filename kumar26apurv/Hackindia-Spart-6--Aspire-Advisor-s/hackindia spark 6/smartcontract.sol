// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        uint id;
        string name;
        string status;
        address owner;
    }

    mapping(uint => Product) public products;
    uint public productCount;

    event ProductAdded(uint id, string name, string status, address owner);
    event ProductStatusUpdated(uint id, string status);

    function addProduct(string memory _name, string memory _status) public {
        productCount++;
        products[productCount] = Product(productCount, _name, _status, msg.sender);
        emit ProductAdded(productCount, _name, _status, msg.sender);
    }

    function updateProductStatus(uint _id, string memory _status) public {
        require(_id > 0 && _id <= productCount, "Product does not exist.");
        require(products[_id].owner == msg.sender, "Only the owner can update the status.");
        
        products[_id].status = _status;
        emit ProductStatusUpdated(_id, _status);
    }

    function getProduct(uint _id) public view returns (uint, string memory, string memory, address) {
        require(_id > 0 && _id <= productCount, "Product does not exist.");
        Product memory p = products[_id];
        return (p.id, p.name, p.status, p.owner);
    }
}