// src/components/LoanList.js
import React, { useEffect, useState } from 'react';
import { getLoan, repayLoan } from '../utils/web3';

const LoanList = () => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const fetchLoans = async () => {
            const loanData = await getLoan();
            setLoans(loanData);
        };
        fetchLoans();
    }, []);

    const handleRepayLoan = async (loanId, repaymentAmount) => {
        try {
            await repayLoan(loanId, repaymentAmount);
            alert('Loan repaid successfully!');
        } catch (error) {
            console.error('Error repaying loan:', error);
        }
    };

    return (
        <div className="loan-list">
            <h2>Active Loans</h2>
            <ul>
                {loans.map((loan, index) => (
                    <li key={index}>
                        <p>Loan ID: {loan.loanId}</p>
                        <p>Amount: {loan.amount} ETH</p>
                        <p>Repayment Amount: {loan.repaymentAmount} ETH</p>
                        <p>Deadline: {new Date(loan.deadline * 1000).toLocaleString()}</p>
                        <button
                            onClick={() => handleRepayLoan(loan.loanId, loan.repaymentAmount)}
                        >
                            Repay Loan
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LoanList;
