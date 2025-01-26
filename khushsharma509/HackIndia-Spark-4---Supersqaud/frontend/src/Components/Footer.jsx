import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-black py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4  text-white">&copy; 2024 SubSquad. All rights reserved.</p>
        <ul className="flex justify-center space-x-6">
          <li><a href="#" className="text-white hover:underline ">Privacy Policy</a></li>
          <li><a href="#" className="text-white hover:underline">Terms of Service</a></li>
          <li><a href="#" className="text-white hover:underline">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
