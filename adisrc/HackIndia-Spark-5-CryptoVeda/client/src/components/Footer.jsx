import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2d3748] text-white py-3">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold mb-4">Team CryptoVeda</h2>
        
        <div className="flex flex-col items-center space-y-2">
          <a href="/about-us" className="text-lg font-medium hover:underline">
            About Us
          </a>
          <a 
            href="https://twitter.com/aditpr0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg font-medium hover:underline"
          >
            Twitter
          </a>
          <a 
            href="mailto:aditprakash.77@gmail.com" 
            className="text-lg font-medium hover:underline"
          >
            Email: aditprakash.77@gmail.com
          </a>
        </div>
        
        <p className="text-sm mt-4">
          &copy; {new Date().getFullYear()} CryptoVeda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
