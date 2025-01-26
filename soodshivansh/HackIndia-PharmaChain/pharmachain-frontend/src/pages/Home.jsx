import React from 'react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-900">
      <header className="bg-blue-800 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Medicine Supply Chain on Blockchain
        </h1>
        <p className="text-lg mb-6">
          Revolutionizing the way we track and manage medicines with blockchain technology.
        </p>
        <Button variant="primary" size="lg" className="mt-4 bg-blue-500 text-white hover:bg-blue-600">
          Get Started
        </Button>
      </header>

      <section className="my-20 text-center">
        <h2 className="text-3xl text-white font-semibold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Track Medicines</h3>
            <p>Monitor the supply chain of medicines in real-time.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Scan QR Codes</h3>
            <p>Quickly access medicine details by scanning QR codes.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p>Ensure the integrity of medicine data with blockchain security.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
            <p>Enjoy a seamless experience with our easy-to-use platform.</p>
          </div>
        </div>
      </section>

      <section className="my-20 text-white">
        <h2 className="text-3xl font-semibold text-center mb-4">How It Works</h2>
        <p className="text-lg text-center">
          Our platform allows users to register medicines and update their statuses. Each medicine is assigned a unique QR code that can be scanned to access its details, ensuring transparency and traceability.
        </p>
      </section>
    </div>
  );
};

export default Home;
