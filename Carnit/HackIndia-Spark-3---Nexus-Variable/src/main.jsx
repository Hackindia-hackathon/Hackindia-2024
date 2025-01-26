import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Flux-1 AI</h1>
      <Link to="/generate">Start Generating Content</Link>
    </div>
  );
}

export default Home;
