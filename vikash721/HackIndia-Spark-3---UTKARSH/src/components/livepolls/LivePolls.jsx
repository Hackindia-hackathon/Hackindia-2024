// src/components/livePolls/LivePolls.jsx
import React from 'react';
import styles from './LivePolls.module.css';

const LivePolls = ({ polls }) => {
  return (
    <div className={styles.livePollsSection}>
      <h2 className={styles.sectionTitle}>Ongoing Polls</h2>
      <div className={styles.pollsContainer}>
        {polls.map((poll) => (
          <div key={poll.id} className={styles.pollCard}>
            <div className={styles.pollContent}>
              <h3>{poll.title}</h3>
              <p>{poll.description}</p>
            </div>
            <button className={styles.voteButton}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePolls;
