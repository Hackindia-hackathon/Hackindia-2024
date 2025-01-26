import React, { useState } from 'react';
import { submitApplication, getAdmissionStatus } from '../admissionsApi';

const SubmitApplication = () => {
    const [applicationData, setApplicationData] = useState('');
    const [senderAddress, setSenderAddress] = useState('');
    const [appId, setAppId] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async () => {
        try {
            const result = await submitApplication(applicationData, senderAddress);
            console.log('Application Submitted:', result);
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    const handleCheckStatus = async () => {
        try {
            const result = await getAdmissionStatus(appId);
            setStatus(result.status);
        } catch (error) {
            console.error('Error checking status:', error);
        }
    };

    return (
        <div>
            <h1>Submit Application</h1>
            <input
                type="text"
                value={applicationData}
                placeholder="Application Data"
                onChange={(e) => setApplicationData(e.target.value)}
            />
            <input
                type="text"
                value={senderAddress}
                placeholder="Sender Address"
                onChange={(e) => setSenderAddress(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit Application</button>

            <h2>Check Application Status</h2>
            <input
                type="text"
                value={appId}
                placeholder="Application ID"
                onChange={(e) => setAppId(e.target.value)}
            />
            <button onClick={handleCheckStatus}>Check Status</button>

            {status && <p>Application Status: {status}</p>}
        </div>
    );
};

export default SubmitApplication;
