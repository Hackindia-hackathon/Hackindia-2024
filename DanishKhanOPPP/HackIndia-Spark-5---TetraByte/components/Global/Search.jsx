import React from 'react'

const Search = () => {
  return (
    <div className='techwave_fn_searchbar'>
      <div className='search__bar'>
        <input type='text' placeholder='Search' className='search__input'/>
        <img src='img/lighticon/light-5.png' className='fn__svg search_-icon'></img>
        <span className='search__closer'>
          <img src='img/lighticon/light-18.png' className='fn__svg'></img>
        </span>
      </div>
      <div className='search__results'>
        <div className='results__title'>
          Results
        </div>
        <div className='results-_list'>
          <ul>
            <li>
              <a href='#'>Artificial Intelligence</a>
            </li>
            <li>
              <a href='#'>Learn about of the impact of AI crypto trading bot</a>
            </li>
            <li>
              <a href='#'>Welcome to the Blockchain</a>
            </li>
            <li>
              <a href='#'>Take the advance development course</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Search