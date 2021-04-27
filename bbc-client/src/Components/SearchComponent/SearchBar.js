import React, { useState } from 'react';

const SearchBar = () => {
  const [webSearch, setWebSearch] = useState('');
  const [language, setLanguage] = useState('arabic');

  const checkUrl = () => {
    const string = webSearch;
    const check = string.startsWith('https://www.bbc.com');
    console.log(check);
    console.log(language);
  };
  return (
    <div>
      <div className='title'></div>
      <div>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Paste your URL website here...'
            onChange={(e) => setWebSearch(e.target.value)}
          ></input>
          <div>
            <select
              className='select'
              name='language'
              onChange={(e) => setLanguage(e.target.value)}
            >
              {/*  Arabic  English Hebrew */}
              {/* <option hidden>Choose language</option> */}

              <option value='arabic'>Arabic</option>
              {/* <option value='english'>English</option> */}
              <option value='hebrew'>Hebrew</option>
            </select>
            <button className='translateBtn' onClick={checkUrl}>
              Translate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
