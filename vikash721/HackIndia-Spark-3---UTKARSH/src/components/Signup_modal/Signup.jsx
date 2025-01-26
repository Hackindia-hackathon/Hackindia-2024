import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import styles from './Signup.module.css';
import Notification from '../notification/Notificationmodal'; // Adjust the import path
import StudentLogin from '../login/Login';

const StudentSignup = ({ closeModal }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');
    const [showLogin, setShowLogin] = useState(false);

    const checkEmailExists = async (email) => {
        const url = `https://script.google.com/macros/s/AKfycbzfPgvB8WMlt3R_YaJabXNwvIPneT0dYodh5G2XMkx4HncWsCtVeqFStGgovl7LDch6vw/exec?email=${encodeURIComponent(email)}`;
        try {
            const response = await axios.get(url);
            return response.data === 'exists';
        } catch (error) {
            console.error('Error checking email existence:', error.message);
            setError('An error occurred while checking the email.');
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Check if the email already exists
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            setError('Email already exists. Please use a different email.');
            return;
        }

        setError('');
        setNotification('Submitting form...');

        // URL to your Google Apps Script Web App
        const url = 'https://script.google.com/macros/s/AKfycbzfPgvB8WMlt3R_YaJabXNwvIPneT0dYodh5G2XMkx4HncWsCtVeqFStGgovl7LDch6vw/exec';

        // Prepare data to send
        const formData = new FormData();
        formData.append('firstname', firstName);
        formData.append('lastname', lastName);
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await axios.post(url, formData);
            console.log('Response:', response); // Log response for debugging
            setNotification('Signup successful!');
            resetForm(); // Reset the form fields
            setTimeout(() => {
                setShowLogin(true); // Show login modal after a short delay
            }, 1000); // Adjust the delay as needed
        } catch (error) {
            console.error('Error details:', error.response ? error.response.data : error.message); // Detailed error logging
            setError('An error occurred while submitting the form.');
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleNotificationClose = () => {
        setNotification('');
    };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            {notification && (
                <Notification
                    message={notification}
                    type="notification-success"
                    onClose={handleNotificationClose}
                />
            )}
            {showLogin ? (
                <StudentLogin closeModal={closeModal} />
            ) : (
                <div className={styles.customModalOverlay}>
                    <div className={styles.customModal}>
                        <div className={styles.customModalHeader}>
                            <header className={styles.header}>Student Signup</header>
                            <span className={styles.customModalClose} onClick={closeModal}>&times;</span>
                        </div>
                        <div className={styles.customModalContent}>
                            <form onSubmit={handleSubmit}>
                                {error && <div className={styles.customErrorMessage}>{error}</div>}
                                <div className={styles.customField}>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className={styles.customInput}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className={styles.customInput}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className={styles.customInput}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="password"
                                        placeholder="Create password"
                                        className={styles.customPassword}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="password"
                                        placeholder="Confirm password"
                                        className={styles.customPassword}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <button type="submit" className={styles.customButton}>Signup</button>
                                </div>
                            </form>
                            <div className={styles.customFormLink}>
                                <span>Already have an account? <a href="#" className={styles.customLink} onClick={() => setShowLogin(true)}>Login</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default StudentSignup;
