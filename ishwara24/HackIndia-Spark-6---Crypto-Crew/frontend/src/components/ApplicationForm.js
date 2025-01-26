import React, { useState } from 'react';
import { submitApplication } from '../contractInteraction'; // Import the interaction function

const ApplicationForm = ({ account }) => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [status, setStatus] = useState('');
    const [txHash, setTxHash] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Submitting...');
        setError('');

        try {
            const tx = await submitApplication(name, course, account);
            setTxHash(tx.transactionHash);
            setStatus('Application submitted successfully!');
        } catch (error) {
            setError(`Error submitting application: ${error.message}`);
            setStatus('');
        }
    };

    return (
        <div className="application-form">
            <h2>Submit Application</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Course:</label>
                    <input
                        type="text"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {status && <p>{status}</p>}
            {txHash && <p>Transaction Hash: <a href={`https://rinkeby.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">{txHash}</a></p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ApplicationForm;
