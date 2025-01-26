import React, { useEffect, useState } from 'react';
import { rewardWhistleblower } from '../contractInteraction';

const Dashboard = ({ account }) => {
    const [reports, setReports] = useState([]);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        // Fetch data from smart contract here for reports and applications (not implemented)
    }, []);

    const rewardTokens = async (recipient, amount) => {
        try {
            await rewardWhistleblower(recipient, amount, account);
            alert("Tokens rewarded successfully!");
        } catch (error) {
            console.error("Error rewarding tokens:", error);
        }
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <h3>Applications</h3>
                {applications.length ? (
                    applications.map((app, index) => (
                        <div key={index}>
                            <p>Name: {app.name}</p>
                            <p>Course: {app.course}</p>
                        </div>
                    ))
                ) : (
                    <p>No applications found.</p>
                )}
            </div>
            <div>
                <h3>Whistleblower Reports</h3>
                {reports.length ? (
                    reports.map((report, index) => (
                        <div key={index}>
                            <p>Report: {report}</p>
                            <button onClick={() => rewardTokens(report.whistleblower, 10)}>
                                Reward Tokens
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No reports found.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
