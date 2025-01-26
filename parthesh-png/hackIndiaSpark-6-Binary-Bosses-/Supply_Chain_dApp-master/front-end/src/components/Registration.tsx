import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [participantType, setParticipantType] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleParticipantTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setParticipantType(event.target.value);
  };

  const handleRegister = () => {
    // TODO: Implement registration logic
    console.log('Register clicked');
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Participant Registration</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="participantType" className="block font-medium">
            Participant Type
          </label>
          <select
            id="participantType"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={participantType}
            onChange={handleParticipantTypeChange}
          >
            <option value="">Select participant type</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Supplier">Supplier</option>
            <option value="Consumer">Consumer</option>
          </select>
        </div>
        <div>
          <button
            type="button"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
