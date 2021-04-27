import React from "react";
import SearchBar from "./components/SearchComponent/Activities";
import Posts from "./components/SearchComponent/SearchBar";

import "./App.css";

export default function App() {
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