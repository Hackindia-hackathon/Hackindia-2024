import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NewUser() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreementChecked: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(formData));
        console.log('User data saved:', formData);
        navigate("/user")
    };

    return (
        <div className='box flex items-center justify-center'>
            <div className="form-container">
                
                <form onSubmit={handleSubmit}>
                    <div className=' flex space-x-2 m-1 mb-2'>
                        <input
                            className='outline-none rounded-md border-2 border-sky-500 p-2 text-center'
                            type="text"
                            placeholder='First name'
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='outline-none rounded-md border-2 border-sky-500 p-2 text-center'
                            type="text"
                            placeholder='Last name'
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className=' flex space-x-2 m-1 mb-2'>
                        <input
                            className='outline-none border-2 border-sky-500 rounded-md w-1/3 p-2'
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        <input
                            className='outline-none w-[100%] rounded-md border-2 border-sky-500 text-center p-2'
                            type="text"
                            placeholder='Phone number'
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className=' flex space-x-6 m-1 mb-2'>
                        <input
                            className='outline-none rounded-md border-2 border-sky-500 p-2 text-center w-[100%]'
                            type="email"
                            placeholder='<your_emial_id>@gmail.com'
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className=' flex space-x-6 m-1 mb-2'>
                        <input
                            className='outline-none rounded-md border-2 border-sky-500 p-2 text-center w-[100%]'
                            type="password"
                            placeholder='Enter your password'
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className=' flex space-x-6 m-1'>
                        <input
                            className='outline-none rounded-md border-2 border-sky-500 p-2 text-center w-[100%]'
                            type="password"
                            placeholder='Confirm your password'
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className=' flex space-x-1 m-1 items-center justify-start'>
                        <input
                            type="checkbox"
                            id="agreementChecked"
                            name="agreementChecked"
                            checked={formData.agreementChecked}
                            onChange={handleChange}
                        />
                        <label htmlFor="agreementChecked">I agree to the terms and conditions</label>
                    </div>
                    <div className=' flex  m-2 p-2 items-center justify-center'>
                        <button
                            
                            className='outline-none bg-sky-500 rounded-md p-2 ps-4 pe-4 text-white'
                            type="submit"
                            disabled={!formData.agreementChecked}
                            
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                <div className='flex items-center justify-center space-x-1'>
                    <span>New user?</span>
                    <Link to="/" className='text-sky-500'>Sign In</Link>
                </div>
                <div className="flex items-center justify-center m-1 mb-2">
                    <div className="w-2/3 h-px bg-black"></div>
                    <div className="mx-4 text-black">OR</div>
                    <div className="w-2/3 h-px bg-black"></div>
                </div>
                <div className="new-user-social-media flex items-center justify-evenly space-x-3">
                    <button className='text-white bg-red-600 p-2 rounded-xl w-1/3' type="button">
                        Google
                    </button>
                    <button className='text-white bg-sky-600 p-2  rounded-xl w-1/3' type="button">
                        LinkedIn
                    </button>
                    <button className='text-white bg-blue-600 p-2  rounded-xl w-1/3' type="button">
                        Meta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewUser;
