import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ExistingUser() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
            alert('Login successful!');
            setEmail(' ');
            setPassword('');
            navigate("/user")
        } else {
            alert('Invalid email or password. Please try again.');
            setEmail(' ');
            setPassword('');
        }   


    };

    return (
        <div className='box flex items-center justify-center'>
            <div className="form-container">
                <form onSubmit={handleSignIn}>
                    <div className=' flex space-x-6 m-1 mb-7 '>
                        <input
                            className='outline-none rounded-md border-2 border-sky-500 p-2 text-center w-[26em]'
                            type="email"
                            placeholder='<your_emial_id>@gmail.com'
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className=' flex space-x-6 m-1 mb-4'>
                        <input
                            className='outline-none rounded-md border-2 border-sky-500 p-2 text-center w-[100%]'
                            type="password"
                            placeholder='Enter your password'
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className=' flex space-x-1 m-1 items-center justify-start'>
                        <input type="checkbox" id="agreementChecked" name="agreementChecked" />
                        <label htmlFor="agreementChecked">I agree to the terms and conditions</label>
                    </div>
                    <div className=' flex  m-2 p-2 items-center justify-center'>
                        <button
                            className='outline-none bg-sky-500 rounded-md p-2 ps-4 pe-4 text-white'
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                    <div className='flex items-center justify-center space-x-1'>
                        <span>New user?</span> 
                        <Link to="/new-user" className='text-sky-500'>Sign Up</Link>
                    </div>
                </form>
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

export default ExistingUser;

