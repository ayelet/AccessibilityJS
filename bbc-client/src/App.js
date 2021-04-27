import React from "react";


import Posts from "./components/SearchComponent/SearchBar";

import SearchBar from "./Components/SearchComponent/SearchBar";
import Activities from "./Components/SearchComponent/Activities";
import Comments from "./Components//ArticleComponent/Comments";

import "./App.css";

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

        <Activities />
      </div>

      <Comments
        comment={"this is so good!!!! love it!! "}
        author={"Orel Alon"}
        time={"2 days ago"}
      />
      <Comments
        comment={"Great article, I would love to see more"}
        author={"Itai Levi"}
        time={"20 minutos ago"}
      />

    </div>
  );
}