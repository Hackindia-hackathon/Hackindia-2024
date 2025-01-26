// import React, { useState } from 'react';
// import { ethers } from 'ethers';

// interface FormData {
//   username: string;
//   email: string;
//   password: string;
//   walletAddress: string;
//   role: string;
// }

// const RegisterationPage: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     username: '',
//     email: '',
//     password: '',
//     walletAddress: '',
//     role: '',
//   });

//   const [errors, setErrors] = useState<Partial<FormData>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const validateForm = (): boolean => {
//     const newErrors: Partial<FormData> = {};

//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters long';
//     }

//     if (!formData.walletAddress.trim()) {
//       newErrors.walletAddress = 'Wallet address is required';
//     } else if (!ethers.utils.isAddress(formData.walletAddress)) {
//       newErrors.walletAddress = 'Invalid Ethereum address';
//     }

//     if (!formData.role) {
//       newErrors.role = 'Please select a role';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Here you would typically send the form data to your backend or smart contract
//       console.log('Form submitted:', formData);
//       // Reset form after successful submission
//       setFormData({ username: '', email: '', password: '', walletAddress: '', role: '' });
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10  ">
//       <h2 className="text-2xl font-bold mb-5">Register for Web3 App</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="username" className="block mb-1">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//         </div>
//         <div>
//           <label htmlFor="email" className="block mb-1">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//         </div>
//         <div>
//           <label htmlFor="password" className="block mb-1">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//         </div>
//         <div>
//           <label htmlFor="walletAddress" className="block mb-1">Wallet Address</label>
//           <input
//             type="text"
//             id="walletAddress"
//             name="walletAddress"
//             value={formData.walletAddress}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.walletAddress && <p className="text-red-500 text-sm mt-1">{errors.walletAddress}</p>}
//         </div>
//         <div>
//           <label htmlFor="role" className="block mb-1">Role</label>
//           <select
//             id="role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//           >
//             <option value="">Select a role</option>
//             <option value="candidate">Candidate</option>
//             <option value="employer">Employer</option>
//             {/* <option value="admin">Admin</option> */}
//           </select>
//           {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterationPage;


import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useSelector } from 'react-redux';

interface FormData {
  username: string;
  email: string;
  password: string;
  walletAddress: string;
}

const RegistrationPage: React.FC = () => {
  const walletAddress = useSelector((state: any) => state.wallet.address);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    walletAddress: walletAddress || '',
  });

  useEffect(()=>{
    console.log(walletAddress);
    
  })

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (!formData.walletAddress.trim() || !ethers.utils.isAddress(formData.walletAddress)) {
      newErrors.walletAddress = 'Invalid Ethereum address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({ username: '', email: '', password: '', walletAddress: '' });
    }
  };

  return (
    <div className="max-w-md mx-auto pt-24 ">
      <h2 className="text-2xl font-bold mb-5 text-center">Register for Web3 App</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="walletAddress" className="block mb-1">Wallet Address</label>
          <input
            type="text"
            id="walletAddress"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            readOnly
          />
          {errors.walletAddress && <p className="text-red-500 text-sm mt-1">{errors.walletAddress}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          <a href="/dashboard/candidate">
          Register
          </a>
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
