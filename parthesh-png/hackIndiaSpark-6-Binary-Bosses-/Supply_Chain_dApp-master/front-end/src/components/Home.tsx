import React from 'react';
import Services from './Services';

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-900">
        <div className='w-4/5 mx-auto'>
          <h1 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-8">
            Welcome to SupdApp
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white text-center mb-12">
          SupdApp is a decentralized application that utilizes blockchain technology to enhance transparency, traceability, and efficiency in the management of supply chain processes.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-white text-center mb-12">
            Track and manage your supply chain with ease.
          </p>
        </div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg">
          Get Started
        </button>
      </div>
    <Services />
    </div>
    
  );
};

export default Home;