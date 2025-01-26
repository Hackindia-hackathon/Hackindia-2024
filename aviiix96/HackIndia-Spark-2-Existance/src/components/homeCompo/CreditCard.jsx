import React, { useState } from 'react';

const CreditCard = ({ details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        perspective: '1000px',
        width: '350px', // Increased width
        height: '200px', // Increased height
      }}
    >
      <div
        style={{
          width: '120%',
          height: '130%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s ease-in-out',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Card Front */}
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(to bottom right, #1e3a8a, #4b5563)',
            borderRadius: '20px',
            color: 'white',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Card Chip */}
          <div
            style={{
              width: '50px',
              height: '35px',
              backgroundColor: '#4b5563',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '20px',
              left: '20px',
            }}
          >
            <img
              src="https://media.tenor.com/8CnlmiFa-rAAAAAi/eth-ethereum.gif"
              alt="Ethereum"
              style={{ width: '30px', height: '30px' }}
            />
          </div>

          {/* Card Number */}
          <div style={{ fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px', marginTop: '60px' }}>
            {details.cardNumber ? details.cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ') : 'XXXX XXXX XXXX XXXX'}
          </div>

          {/* Cardholder Name */}
          <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '20px' }}>
            {details.cardholderName || 'Cardholder Name'}
          </div>

          {/* Expiry Date */}
          <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>
            {details.expiryDate || 'MM/YY'}
          </div>

          {/* Card Type Icons */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <img
              src="https://imgs.search.brave.com/AWIHNmphRNzox14kyBcKmt9tcKbRYcd903tyyYabU7k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzVlL1Zpc2FfSW5j/Ll9sb2dvLnN2Zw"
              alt="Visa"
              style={{ width: '40px', height: '25px' }}
            />
            <img
              src="https://imgs.search.brave.com/9iejfnJwGWzNyINb-CYJGrJQvsvkZBBt6C55eQ9DNuA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS52b3guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9zaXRl/cy8yL2Nob3J1cy91/cGxvYWRzL2Nob3J1/c19hc3NldC9maWxl/LzEzNjc0NTU0L01h/c3RlcmNhcmRfbG9n/by5qcGc_cXVhbGl0/eT05MCZzdHJpcD1h/bGwmY3JvcD0wLDE2/LjY2NjY2NjY2NjY2/NywxMDAsNjYuNjY2/NjY2NjY2NjY3Jnc9/MjQwMA"
              alt="MasterCard"
              style={{ width: '40px', height: '25px' }}
            />
            <img
              src="https://imgs.search.brave.com/Q4UjFZM_RJR0CR9tfkwU7Trm3JUdjgsNDX5BCcrcdCE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9hbWVyaWNhbi1l/eHByZXNzLTEuc3Zn"
              alt="American Express"
              style={{ width: '40px', height: '25px' }}
            />
          </div>
        </div>

        {/* Card Back */}
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            backgroundColor: '#2d3748',
            borderRadius: '20px',
            color: 'white',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'rotateY(180deg)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Card Number */}
          <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '20px' }}>
            {details.cardNumber ? details.cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ') : 'XXXX XXXX XXXX XXXX'}
          </div>
          
          {/* CVV */}
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>
            {details.cvv || 'XXX'}
          </div>

          {/* Expiry Date */}
          <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>
            {details.expiryDate || 'MM/YY'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
