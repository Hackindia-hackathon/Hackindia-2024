// src/components/LoanForm.js
import React, { useState } from 'react';
import { createLoan } from '../utils/web3';

const LoanForm = () => {
    const [amount, setAmount] = useState('');
    const [repaymentAmount, setRepaymentAmount] = useState('');
    const [duration, setDuration] = useState('');

    const handleCreateLoan = async (e) => {
        e.preventDefault();
        try {
            await createLoan(amount, repaymentAmount, duration);
            alert('Loan created successfully!');
        } catch (error) {
            console.error('Error creating loan:', error);
        }
    };

    return (
        <form onSubmit={handleCreateLoan} className="loan-form">
            <div>
                <label>Loan Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Repayment Amount:</label>
                <input
                    type="number"
                    value={repaymentAmount}
                    onChange={(e) => setRepaymentAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Loan Duration (in seconds):</label>
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Loan</button>
        </form>
    );
};

export default LoanForm;
