import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Generate from './components/Generate';
import Mint from './components/Mint';
import './app.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </Router>
  );
}

export default App;
