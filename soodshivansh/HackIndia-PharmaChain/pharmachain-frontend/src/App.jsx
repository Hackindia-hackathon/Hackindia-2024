import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Medicines from './pages/Medicines';
import Logs from './pages/logs';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/register" element={<Medicines />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
