import { Link } from "react-router-dom";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <h2 className="content-headers">Search Pokedex</h2>
      <div className="searchbar">
        <input type="text" id="search-input" />
        <button id="search-button" className="buttons">
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
