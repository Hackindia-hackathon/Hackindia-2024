// src/App.js
import React from 'react';
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';
import SecurityChecks from './components/SecurityChecks';

function App() {
  return (
    <div className="App">
      <h1>Secure Loan Platform</h1>
      <LoanForm />
      <LoanList />
      <SecurityChecks />
    </div>
  );
}

export default App;
