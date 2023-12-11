import { Link } from "react-router-dom";
import "./Search.css";
import { useState } from "react";

export default function Search() {
  const [searchType, setSearchType] = useState("number");

  return (
    <div className="search">
      <h2 className="content-headers">Search Pokedex</h2>
      <div className="searchbar">
        <select
          className="search-select"
          onChange={(e) => {
            setSearchType(e.target.value);
          }}
        >
          <option value={"number"}>Number</option>
          <option value={"name"}>Name</option>
          <option value={"type"}>Type</option>
        </select>
        <input type="text" id="search-input" />
        <button
          id="search-button"
          className="buttons"
          onClick={() => {
            console.log(searchType);
          }}
        >
          Search
        </button>
      </div>
      <Link title="Home" to={"/home"}>
        <button id="search-home-button" className="buttons">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
