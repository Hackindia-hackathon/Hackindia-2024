import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Aditya Prakash' },
    { name: 'Satyam' },
    { name: 'Nishant' },
    { name: 'Shamb' }
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-[#1a202c] min-h-screen text-white">
      <img 
        src='https://seeklogo.com/images/C/cv-comunidad-valenciana-logo-CD417D951E-seeklogo.com.png' 
        alt="Logo" 
        className="w-40 h-auto mb-6"
      />
      
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      
      <p className="text-lg mb-8 text-center">
        <span className='text-2xl font-semibold'>We are Team CryptoVeda</span>
        <br />
        Welcome to our crowdfunding platform! We are a passionate team committed to revolutionizing the way projects are funded through blockchain technology.
      </p>
      
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        
        <ul className="list-none space-y-4">
          {teamMembers.map((member, index) => (
            <li 
              key={index} 
              className="bg-[#2d3748] p-4 rounded-lg shadow-md w-full max-w-xs flex justify-center items-center"
            >
              <span className="text-lg font-medium">{member.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
