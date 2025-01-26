import React, { useEffect } from 'react';
import './notificationmodal.css'; // Make sure to create this CSS file

const Notification = ({ message, type, onClose }) => {
    useEffect(() => {
        // Automatically close the notification after 3 seconds
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`notification ${type}`}>
            {message}
            <span className="notification-close" onClick={onClose}>&times;</span>
        </div>
    );
};

export default Notification;
