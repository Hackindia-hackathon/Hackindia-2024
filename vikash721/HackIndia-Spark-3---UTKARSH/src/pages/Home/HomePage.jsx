import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import UserProfile from '../../components/user_profile/UserProfile'; 
import CreatePoll from '../../components/new_pole/newpole'; // Import the new component
import LivePolls from '../../components/livepolls/LivePolls'; // Import the new component
import styles from './HomePage.module.css';

const HomePage = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showCreatePoll, setShowCreatePoll] = useState(false);

  const handleGetStarted = () => {
    setShowProfile(true);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  const handleCreatePollClick = () => {
    setShowCreatePoll(true);
  };

  const closeCreatePoll = () => {
    setShowCreatePoll(false);
  };

  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  };

  // Example data for live polls
  const polls = [
    { id: 1, title: 'Live Poll 1', description: 'Description for Live Poll 1' },
    { id: 2, title: 'Live Poll 2', description: 'Description for Live Poll 2' }
  ];

  const handleVote = (pollId) => {
    console.log(`Vote for poll ID: ${pollId}`);
    // Implement voting logic here
  };

  return (
    <div className={styles.homePage}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>Decentralized Voting</div>
        <div className={styles.headerActions}>
          <button className={styles.connectWallet}>Connect Wallet</button>
          <FontAwesomeIcon
            icon={faUser}
            className={styles.userIcon}
            onClick={handleGetStarted} // Updated to trigger user profile modal
          />
        </div>
      </header>

      {/* Create a New Poll Section */}
      <section className={styles.createPollSection}>
        <div className={styles.createPollContainer} onClick={handleCreatePollClick}>
          <FontAwesomeIcon icon={faPlusCircle} className={styles.icon} />
          <span>Create a New Poll</span>
        </div>
      </section>

      {/* Live Polls Section */}
      <LivePolls polls={polls} onVote={handleVote} />

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 Decentralized Voting System. All rights reserved.</p>
      </footer>

      {/* Conditional Rendering of User Profile Modal */}
      {showProfile && <UserProfile userData={userData} closeModal={closeProfile} />}

      {/* Conditional Rendering of Create Poll Modal */}
      {showCreatePoll && <CreatePoll closeModal={closeCreatePoll} />}
    </div>
  );
};

export default HomePage;
