import './search.scss';
import React, { useState } from 'react';

const Search = ({searchValue, setSearchValue}) => {


  return (
    <div className="flight-input">
      <h1 className="flight-input__title">SEARCH FLIGHT</h1>
      <div className="flight-input__input-block seach-block">
          <i className="fas fa-search search__loop"></i>
        <input
          placeholder=" flight #"
          type="text"
          onChange={e => setSearchValue(e.target.value)}
          name="flight-number"
          className="seach-block__input"
          value={searchValue}
        />
          {searchValue && <svg
              onClick={()=>setSearchValue("")}
              className="clearIcon"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
                  d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
          </svg>}
        <button className="seach-block__button">Search</button>
      </div>
    </div>
  );
};

export default Search;
