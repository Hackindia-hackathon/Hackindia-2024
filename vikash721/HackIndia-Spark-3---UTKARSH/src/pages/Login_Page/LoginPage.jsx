import React, { useState } from 'react';
import Login from '../../components/login/Login'; // Adjust the import path for your Login component
import styles from './LoginPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheckCircle, faVoteYea, faWallet } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleGetStarted = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className={styles.homePage}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>Decentralized Voting</div>
        <button className={styles.connectWallet}>
          <FontAwesomeIcon icon={faWallet} style={{ color: '#f1c40f' }} />
          Connect Wallet
        </button>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Your Vote, Your Voice</h1>
          <p className={styles.subtitle}>A transparent, secure, and fair way to vote using blockchain technology.</p>
          <button className={styles.getStartedButton} onClick={handleGetStarted}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <FontAwesomeIcon icon={faVoteYea} size="3x" style={{ color: '#2ecc71' }} />
          <h3>Transparency</h3>
          <p>Every vote is publicly verifiable on the blockchain.</p>
        </div>
        <div className={styles.feature}>
          <FontAwesomeIcon icon={faLock} size="3x" style={{ color: '#2ecc71' }} />
          <h3>Security</h3>
          <p>Blockchain ensures your vote is tamper-proof and safe.</p>
        </div>
        <div className={styles.feature}>
          <FontAwesomeIcon icon={faCheckCircle} size="3x" style={{ color: '#2ecc71' }} />
          <h3>Fairness</h3>
          <p>A system that ensures equality for every voter.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <FontAwesomeIcon icon={faWallet} size="2x" style={{ color: '#9b59b6' }} />
            <h3>1. Connect Wallet</h3>
            <p>Start by connecting your cryptocurrency wallet.</p>
          </div>
          <div className={styles.step}>
            <FontAwesomeIcon icon={faVoteYea} size="2x" style={{ color: '#9b59b6' }} />
            <h3>2. Select a Vote</h3>
            <p>Choose an ongoing vote to participate in.</p>
          </div>
          <div className={styles.step}>
            <FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ color: '#9b59b6' }} />
            <h3>3. Cast Your Vote</h3>
            <p>Make your choice and submit your vote securely.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 Decentralized Voting System. All rights reserved.</p>
      </footer>

      {/* Conditional Rendering of Login Modal */}
      {showLogin && <Login closeModal={closeLogin} />}
    </div>
  );
};

export default LoginPage;
