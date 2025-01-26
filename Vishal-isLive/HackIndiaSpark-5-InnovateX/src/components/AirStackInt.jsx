import React, { useEffect } from 'react';
import { init, useQuery } from '@airstack/airstack-react';

const AirStackInt = () => {
  const [result, setResult] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example of using `fetchQuery`
        const data = await fetchQuery('your-query-here');
        setResult(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      {/* Render your component based on the result */}
      {result ? <pre>{JSON.stringify(result, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default AirStackInt;
