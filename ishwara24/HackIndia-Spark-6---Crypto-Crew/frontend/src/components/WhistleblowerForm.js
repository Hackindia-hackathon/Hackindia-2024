import React, { useState } from 'react';
import { submitWhistleblowingReport } from '../contractInteraction'; // Import the interaction function

const WhistleblowerForm = ({ account }) => {
    const [report, setReport] = useState('');
    const [status, setStatus] = useState('');
    const [txHash, setTxHash] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Submitting...');
        setError('');

        try {
            const tx = await submitWhistleblowingReport(report, account);
            setTxHash(tx.transactionHash);
            setStatus('Whistleblowing report submitted successfully!');
        } catch (error) {
            setError(`Error submitting report: ${error.message}`);
            setStatus('');
        }
    };

    return (
        <div className="whistleblower-form">
            <h2>Submit Whistleblowing Report</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Report:</label>
                    <textarea
                        value={report}
                        onChange={(e) => setReport(e.target.value)}
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

export default WhistleblowerForm;
