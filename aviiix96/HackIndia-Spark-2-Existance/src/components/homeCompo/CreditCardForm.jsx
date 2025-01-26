import React, { useState } from 'react';
import CreditCard from './CreditCard';

const CreditCardForm = () => {
  const [cardDetails, setCardDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, '') // Remove non-digit characters
      .replace(/(.{4})/g, '$1 ') // Add a space after every 4 digits
      .trim(); // Remove trailing space
  };

  const formatExpiryDate = (value) => {
    return value
      .replace(/\D/g, '') // Remove non-digit characters
      .replace(/(\d{2})(\d{0,2})/, '$1/$2') // Add a slash after the first 2 digits
      .trim(); // Remove trailing space
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    switch (name) {
      case 'cardNumber':
        formattedValue = formatCardNumber(value);
        break;
      case 'expiryDate':
        formattedValue = formatExpiryDate(value);
        break;
      case 'cvv':
        formattedValue = value.replace(/\D/g, ''); // Only numbers
        break;
      default:
        break;
    }

    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: formattedValue
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { cardNumber, expiryDate, cvv } = cardDetails;

    // Card Number Validation
    const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    if (!cardNumberPattern.test(cardNumber)) {
      newErrors.cardNumber = 'Invalid card number. Format should be 1234 5678 9123 4567';
    }

    // Expiry Date Validation
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/(2[0-9])$/;
    if (!expiryDatePattern.test(expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date. Format should be MM/YY';
    }

    // CVV Validation
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv)) {
      newErrors.cvv = 'Invalid CVV. Should be 3 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-around w-full max-w-5xl mb-12">
      <form onSubmit={handleSubmit} className="bg-gray-800 bg-opacity-80 p-8 rounded-4xl shadow-lg w-full lg:w-1/2 mb-12 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-white">Enter Card Details</h2>
        <div className="mb-4">
          <label className="block text-gray-400">Cardholder Name</label>
          <input
            type="text"
            name="cardholderName"
            value={cardDetails.cardholderName}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-700 rounded-lg border-none focus:ring-2 focus:ring-primary"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            className={`w-full p-3 mt-2 bg-gray-700 rounded-lg border-none focus:ring-2 focus:ring-primary ${errors.cardNumber ? 'border-red-500' : ''}`}
            placeholder="1234 5678 9123 4567"
            maxLength="19" // Maximum length considering spaces
          />
          {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
        </div>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-400">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleChange}
              className={`w-full p-3 mt-2 bg-gray-700 rounded-lg border-none focus:ring-2 focus:ring-primary ${errors.expiryDate ? 'border-red-500' : ''}`}
              placeholder="MM/YY"
              maxLength="5" // Maximum length including slash
            />
            {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-gray-400">CVV</label>
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleChange}
              className={`w-full p-3 mt-2 bg-gray-700 rounded-lg border-none focus:ring-2 focus:ring-primary ${errors.cvv ? 'border-red-500' : ''}`}
              placeholder="123"
              maxLength="3" // CVV is always 3 digits
            />
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary p-3 rounded-lg mt-4 hover:bg-primary-dark transition"
        >
          Submit
        </button>
      </form>
      <CreditCard details={cardDetails} />
    </div>
  );
};

export default CreditCardForm;
