import React, { useState, Suspense, startTransition } from 'react';
import FileUpload from '../Logic/FileUpload'; // Adjust the import path if necessary
import ObjModel from '../Logic/ObjModel'; // Adjust the import path if necessary

function CreateNfts() {
  const [model, setModel] = useState(null);
  const [modelUrl, setModelUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);

  const handleFileUpload = (file) => {
    if (file && file.name.endsWith('.obj')) {
      const url = URL.createObjectURL(file);
      setModel(file);
      startTransition(() => {
        setModelUrl(url);
        setError(null); // Clear any previous errors
      });
    } else {
      setError('Invalid file type. Please upload a valid .obj file.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
    console.log({ model, name, description, price });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create NFT</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">3D Model</label>
            <FileUpload onFileUpload={handleFileUpload} />
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
          {modelUrl && (
            <div className="mb-4 w-full h-64 border rounded-lg overflow-hidden">
              <Suspense fallback={<div>Loading 3D Model...</div>}>
                <ObjModel objUrl={modelUrl} />
              </Suspense>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 p-2 border rounded w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-2 p-2 border rounded w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
            Create NFT
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNfts;
