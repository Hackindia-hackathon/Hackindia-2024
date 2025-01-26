import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

// Create a Context
export const CONTEXT = createContext();

export const PROVIDER = ({ children }) => {
  const [topTokens, setTopTokens] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null); // State to manage errors

  // Uniswap V3 Subgraph URL
  const UNISWAP_SUBGRAPH_URL =
    'https://gateway.thegraph.com/api/67d2b2630851ea0bccf1858a68f2edeb/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV';

  // Fetch Uniswap token data
  const fetchTokenData = async () => {
    try {
      setLoader(true); // Start loading
      setError(null); // Reset error state before fetching

      const query = `
        {
          pools(first: 5, orderBy: liquidity, orderDirection: desc) {
            id
            token0 {
              id
              symbol
              name
            }
            token1 {
              id
              symbol
              name
            }
            liquidity
            volumeUSD
          }
        }
      `;

      const response = await axios.post(UNISWAP_SUBGRAPH_URL, { query });

      // Check for GraphQL errors
      if (response.data.errors) {
        setError('Failed to fetch token data due to GraphQL errors');
        console.error('GraphQL Errors:', response.data.errors);
        response.data.errors.forEach((error) =>
          console.error('Error Detail:', error.message)
        );
        return;
      }

      const pools = response.data.data.pools;

      // Map the fetched pool data to top tokens
      const tokens = pools.map((pool) => ({
        token0: {
          id: pool.token0.id,
          symbol: pool.token0.symbol,
          name: pool.token0.name,
        },
        token1: {
          id: pool.token1.id,
          symbol: pool.token1.symbol,
          name: pool.token1.name,
        },
        liquidity: pool.liquidity,
        volumeUSD: pool.volumeUSD,
      }));

      setTopTokens(tokens); // Set fetched tokens
    } catch (err) {
      setError('Error fetching token data from Uniswap');
      console.error('Error fetching token data from Uniswap:', err.message);
    } finally {
      setLoader(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchTokenData(); // Fetch token data on mount
  }, []);

  return (
    <CONTEXT.Provider value={{ topTokens, loader, error }}>
      {children}
    </CONTEXT.Provider>
  );
};
