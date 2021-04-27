import SearchBar from "./Components/SearchComponent/SearchBar";
import Posts from "./Components/SearchComponent/Activities";
import React from "react";

import "./App.css";

function App() {
  return (
    <div>
      <div className="landingContainer">
        <div className="wrapper">
          <h1>BBC Science-Environment Translator</h1>
          <SearchBar />
        </div>
      </div>
      <div className="landingContainer">
        <h1>Latest:</h1>
        <Posts />
      </div>
    </div>
  );
}

export default App;
