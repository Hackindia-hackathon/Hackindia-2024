import React, { useState } from 'react';

const InputFields = ({users,setUsers,numInputs,setNumInputs}) => {
 


  // Function to handle input change for number of inputs
  const handleNumInputsChange = (e) => {
    const value = e.target.value;

    // Check if input is within the allowed range (1-6)
    if (/^[2-6]{0,1}$/.test(value)) {
      setNumInputs(value);

      // Generate users array with empty values based on input
      const newUsers = [];
      for (let i = 1; i < parseInt(value); i++) {
        newUsers.push({ id: i, username: '', useraccountnumber: '' });
      }
      setUsers(newUsers);
      setShowInputs(true);
    } else {
      alert('Input should be between 1 and 6');
      setNumInputs('');
      setShowInputs(false);
    }
  };


  // Function to handle input changes for username and account number
  const handleInputChange = (e, userId, field) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, [field]: e.target.value };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className=''>
     <div className='flex justify-between gap-2 '>
     <lalel className="font-semibold text-lg">No of Contributor :  </lalel>
      {/* Input to specify number of inputs */}
      <input
        type="number"
        value={numInputs}
        onChange={handleNumInputsChange}
        placeholder="Number of inputs"
        className="border border-gray-300 px-3 py-2 rounded-md mr-2 mb-4"
      />
     </div>

      {/* Generate input fields based on user input */}
      {users.map(user => (
        <div key={user.id} className="mb-4">
          {/* Username input */}
          <input
            type="text"
            value={user.username}
            onChange={(e) => handleInputChange(e, user.id, 'username')}
            placeholder="Username"
            className="border border-gray-300 p-2 rounded-md mr-4"
          />
          {/* Account number input */}
          <input
            type="text"
            value={user.useraccountnumber}
            onChange={(e) => handleInputChange(e, user.id, 'useraccountnumber')}
            placeholder="User Account Number"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
      ))}
    </div>
  );
}

export default InputFields;
