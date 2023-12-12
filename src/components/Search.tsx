import { Link } from "react-router-dom";
import "./Search.css";
import { useState } from "react";
import { testDataArray, TestDataProps } from "./TestData";
import SearchResults from "./SearchResults";

export default function Search() {
  const [searchType, setSearchType] = useState("number");
  const [searchRan, setSearchRan] = useState(false);
  const [searchResults, setSearchResults] = useState<TestDataProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm: string) => {
    const results = [];
    if (searchType === "name") {
      for (const entry of testDataArray) {
        const name = entry.name.toUpperCase();
        const search = searchTerm.toUpperCase();

        if (name.includes(search)) {
          results.push(entry);
        }
      }
    } else if (searchType === "number") {
      for (const entry of testDataArray) {
        if (entry.dexId === parseInt(searchTerm)) {
          results.push(entry);
        }
      }
    }

    setSearchResults(results);
    setSearchRan(true);
  };

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
        </select>
        <input
          type="text"
          id="search-input"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button
          id="search-button"
          className="buttons"
          onClick={() => {
            if (searchTerm === "") {
              alert("Cannot be blank.");
              return;
            }
            handleSearch(searchTerm);
          }}
        >
          Search
        </button>
      </div>
      <div className="search-results">
        <h3>Search Results:</h3>
        {searchRan ? (
          <SearchResults searchResults={searchResults} />
        ) : (
          <p>Do a search first!</p>
        )}
      </div>
      <Link title="Home" to={"/home"}>
        <button id="search-home-button" className="buttons">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
