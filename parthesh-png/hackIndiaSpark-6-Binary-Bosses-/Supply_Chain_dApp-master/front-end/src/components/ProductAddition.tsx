import React, { useState } from 'react';

const ProductAddition: React.FC = () => {
  const [ownerId, setOwnerId] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [productCost, setProductCost] = useState('');

  const handleOwnerIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerId(event.target.value);
  };

  const handleModelNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModelNumber(event.target.value);
  };

  const handlePartNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartNumber(event.target.value);
  };

  const handleSerialNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumber(event.target.value);
  };

  const handleProductCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductCost(event.target.value);
  };

  const handleAddProduct = () => {
    // TODO: Implement product addition logic
    console.log('Add Product clicked');
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Product Addition</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="ownerId" className="block font-medium">
            Owner ID
          </label>
          <input
            type="text"
            id="ownerId"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={ownerId}
            onChange={handleOwnerIdChange}
          />
        </div>
        <div>
          <label htmlFor="modelNumber" className="block font-medium">
            Model Number
          </label>
          <input
            type="text"
            id="modelNumber"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={modelNumber}
            onChange={handleModelNumberChange}
          />
        </div>
        <div>
          <label htmlFor="partNumber" className="block font-medium">
            Part Number
          </label>
          <input
            type="text"
            id="partNumber"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={partNumber}
            onChange={handlePartNumberChange}
          />
        </div>
        <div>
          <label htmlFor="serialNumber" className="block font-medium">
            Serial Number
          </label>
          <input
            type="text"
            id="serialNumber"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={serialNumber}
            onChange={handleSerialNumberChange}
          />
        </div>
        <div>
          <label htmlFor="productCost" className="block font-medium">
            Product Cost
          </label>
          <input
            type="text"
            id="productCost"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={productCost}
            onChange={handleProductCostChange}
          />
        </div>
        <div>
          <button
            type="button"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAddition;
