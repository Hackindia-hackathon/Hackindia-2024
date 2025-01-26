import React, { useState } from 'react';
import styles from './Login.module.css';
import Notification from '../notification/Notificationmodal'; // Adjust the import path
import StudentSignup from '../Signup_modal/Signup';

const StudentLogin = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');
    const [showSignup, setShowSignup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email.');
            return;
        }

        setError('');
        setNotification('Login successful!');
        // Handle successful form submission here
        // closeModal(); // Close the modal on successful login (if desired)
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleNotificationClose = () => {
        setNotification('');
    };

    const handleSignupClick = () => {
        setShowSignup(true);
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
            {showSignup ? (
                <StudentSignup closeModal={closeModal} />
            ) : (
                <div className={styles.customModalOverlay}>
                    <div className={styles.customModal}>
                        <div className={styles.customModalHeader}>
                            
                            <header className={styles.header} >Student Login</header>
                            <span className={styles.customModalClose} onClick={closeModal}>&times;</span>
                        </div>
                        <div className={styles.customModalContent}>
                            <form onSubmit={handleSubmit}>
                                {error && <div className={styles.customErrorMessage}>{error}</div>}
                                <div className={styles.customField}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className={styles.customInput}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        autoComplete="email"
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={styles.customPassword}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        autoComplete="current-password"
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <button type="submit" className={styles.customButton}>Login</button>
                                </div>
                            </form>
                            <div className={styles.customFormLink}>
                                <span>Don't have an account? <a href="#" className={styles.customLink} onClick={handleSignupClick}>Signup</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default StudentLogin;
