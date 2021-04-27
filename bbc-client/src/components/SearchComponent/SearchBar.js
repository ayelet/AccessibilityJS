import React, { useEffect, useState } from "react";
import api from '../../api/api';


const SearchBar = () => {
  const [webSearch, setWebSearch] = useState("");
  const [language, setLanguage] = useState("arabic");
  const [data, setData] = useState('');

  useEffect(() => {

  }, [])

  const checkUrl = () => {
    const string = webSearch;
    const check = string.startsWith("https://www.bbc.com/");
    if (check) {
      handleClick();
    }
    // console.log(check);
    // console.log(language);
  };

  const handleClick = async (title, content) => {
    try {
      const { data } = await api.post('/newPost', { url: webSearch });
      setData(data);
    } catch (err) {
      console.log(err);
    }
    console.log(`${title}: `);
  };

  return (
    <div>
      <div className="title"></div>
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Paste your URL website here..."
            onChange={(e) => setWebSearch(e.target.value)}
          ></input>
          <div>
            <select
              className="select"
              name="language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              {/*  Arabic  English Hebrew */}
              {/* <option hidden>Choose language</option> */}

              <option value="arabic">Arabic</option>
              {/* <option value='english'>English</option> */}
              <option value="hebrew">Hebrew</option>
            </select>
            <button className="translateBtn" onClick={checkUrl}>
              Translate
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>{data.title}</h1>
        <h4>{data.content}</h4>   
      </div>
    </div>
  );
};

export default SearchBar;