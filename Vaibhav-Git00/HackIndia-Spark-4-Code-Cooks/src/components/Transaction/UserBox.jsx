import React, { useState } from 'react';

const UserBox = ({ userId, userName, userAccount, Amount }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      id='main'
      className={`p-4 m-3 border-1 border-gray-300 text-black rounded flex flex-col ${isChecked ? 'bg-green-500' : 'bg-red-500'
        }`}
    >
      <table className="w-full">
        <tbody>
          <tr>
            <td className="pr-4 font-semibold text-lg">{userId}</td>
            <td className="font-semibold text-lg">{userName}</td>
            <td className="pr font-semibold text-lg">{userAccount}</td>
            <td className="text-lg font-semibold">Rs. {Amount}</td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-end items-center'>
        <input
          type="checkbox"
          id="status"
          checked={isChecked}
          onChange={handleChange}
          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label htmlFor="status" className="font-semibold text-black px-1 cursor-pointer">
          {isChecked ? 'Success' : 'Pending'}
        </label>
      </div>
    </div>
  );
};

export default UserBox;
