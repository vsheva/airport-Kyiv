import './search.scss';
import React, { useState } from 'react';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <div className="flight-input">
      <h1 className="flight-input__title">SEARCH FLIGHT</h1>
      <div className="flight-input__input-block seach-block">
          <i className="fas fa-search search__loop"></i>
        <input
          placeholder=" flight #"
          type="text"
          onChange={e => setValue(e.target.value)}
          name="flight-number"
          className="seach-block__input"
          value={value}
        />
        <button className="seach-block__button">Search</button>
      </div>
    </div>
  );
};

export default Search;
