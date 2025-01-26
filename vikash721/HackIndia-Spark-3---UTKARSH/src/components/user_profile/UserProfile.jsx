// src/components/userProfile/UserProfile.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './UserProfile.module.css'; // Updated CSS module for modern design

const UserProfile = ({ userData, closeModal }) => {
    return (
        <div className={styles.profileModalOverlay}>
            <div className={styles.profileModal}>
                <div className={styles.profileHeader}>
                    <h2>User Profile</h2>
                    <button className={styles.closeButton} onClick={closeModal}>&times;</button>
                </div>
                <div className={styles.profileContent}>
                    <div className={styles.profileCard}>
                        <div className={styles.avatarContainer}>
                            <FontAwesomeIcon 
                                icon={faUserCircle} 
                                className={styles.avatar} 
                            />
                        </div>
                        <div className={styles.userInfo}>
                            <p><strong>First Name:</strong> {userData.firstName}</p>
                            <p><strong>Last Name:</strong> {userData.lastName}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            {/* Add more user details here if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
