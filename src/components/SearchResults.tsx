import "./SearchResults.css";
import { Link } from "react-router-dom";
import PokemonData from "./PokemonData";

interface SearchResultsProps {
  searchResults: PokemonData[];
}

export default function SearchResults({ searchResults }: SearchResultsProps) {
  searchResults.length > 0;
  return (
    <div className="search-results">
      {searchResults.length > 0 ? (
        <ul className="results-list">
          {searchResults.map((result) => (
            <div key={result.id}>
              <Link to={`/entry/${result.dex_id}`}>
                <li key={result.id}>
                  {result.dex_id}. {result.name}
                </li>
              </Link>
            </div>
          ))}
        </ul>
      ) : (
        <p id="no-results">No results found.</p>
      )}
    </div>
  );
}
