// CreatePoll.jsx
import React, { useState } from 'react';
import styles from './newpole.module.css'; // Ensure the CSS module exists

const CreatePoll = ({ closeModal }) => {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['']);
  
  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Poll created:', title, options);
    closeModal(); // Close the modal after submission
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Create a New Poll</h2>
          <span className={styles.closeButton} onClick={closeModal}>&times;</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Poll Title:</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Options:</label>
            {options.map((option, index) => (
              <div key={index} className={styles.optionGroup}>
                <input 
                  type="text" 
                  value={option} 
                  onChange={(e) => handleOptionChange(index, e.target.value)} 
                  required 
                />
              </div>
            ))}
            <button type="button" onClick={handleAddOption}>Add Option</button>
          </div>
          <button type="submit">Create Poll</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePoll;
