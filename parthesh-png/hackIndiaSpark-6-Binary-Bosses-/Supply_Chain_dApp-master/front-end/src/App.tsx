import React from 'react';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex-grow">
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
