import React, { useContext, useState, useEffect } from 'react';
import { CONTEXT } from '../../context/context'; // Update the path to your context file

const TopExchangeData = () => {
  const { topTokens, loader } = useContext(CONTEXT); // Fetch tokens and loader state from context
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Initialize with topTokens from context on load
    if (topTokens.length > 0) {
      setFilteredData(topTokens);
    }
  }, [topTokens]);

  // Handle search filtering logic
  const onHandleSearch = (value) => {
    setSearch(value);
    const filtered = topTokens.filter(item =>
      item.token0.name.toLowerCase().includes(value.toLowerCase()) ||
      item.token0.symbol.toLowerCase().includes(value.toLowerCase()) ||
      item.token1.name.toLowerCase().includes(value.toLowerCase()) ||
      item.token1.symbol.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Clear search input and reset data
  const onClearSearch = () => {
    setSearch("");
    setFilteredData(topTokens); // Reset to all tokens
  };

  // Trigger filtering when search input changes
  useEffect(() => {
    onHandleSearch(search);
  }, [search, topTokens]);

  return (
    <div className='techwave_fn_content'>
      <div className='techwave_fn_page'>
        <div className='techwave_fn_community_page'>
          <div className='fn__title_holder'>
            <div className='container'>
              <h2 className='title'>Top Exchange Data</h2>
            </div>
          </div>
          <div className='techwave_fn_feed'>
            <div className='container'>
              <div className='feed__filter'>
                <div className='filter__search'>
                  <input
                    type='text'
                    placeholder='Search Data'
                    value={search}
                    onChange={(e) => onHandleSearch(e.target.value)}
                  />
                  <button className='techwave_fn_button' onClick={onClearSearch}>
                    <span>Clear</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='techwave_fn_pricing'>
              <div className='container'>
                <div className='pricing__tabs'>
                  <div className='pricing__tab active'>
                    <div className='fn__mobile_pricing'>
                      <div className='pricing_item'>
                        <div className='pricing__item_holder'>
                          <div className='pricing__item_heading'>
                            <h2 className='title'>Data</h2>
                          </div>
                          <div className='pricing__item_list'>
                            {loader ? (
                              <p>Loading data...</p>
                            ) : (
                              filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                  <div className='pricing__item_list_item' key={index}>
                                    <div>
                                      <h4 className='title'>
                                        {item.token0.name} ({item.token0.symbol}) & 
                                        {item.token1.name} ({item.token1.symbol}) - Liquidity: 
                                        ${parseFloat(item.liquidity).toFixed(2)}
                                      </h4>
                                      <p>Volume USD: ${parseFloat(item.volumeUSD).toFixed(2)}</p>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p>No tokens found.</p>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopExchangeData;
