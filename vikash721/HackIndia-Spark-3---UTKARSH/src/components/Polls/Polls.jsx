import React from 'react';
import styles from './Polls.module.css'; // Create this CSS file for styling

const Polls = ({ polls, closePolls }) => {
  return (
    <div className={styles.pollsContainer}>
      <header className={styles.pollsHeader}>
        <h2>My Polls</h2>
        <button className={styles.closeButton} onClick={closePolls}>Close</button>
      </header>
      <div className={styles.pollsList}>
        {polls.length ? (
          polls.map((poll) => (
            <div key={poll.id} className={styles.pollItem}>
              <h3>{poll.title}</h3>
              <p>{poll.description}</p>
            </div>
          ))
        ) : (
          <p>No polls available.</p>
        )}
      </div>
    </div>
  );
};

export default Polls;
