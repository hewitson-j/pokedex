import { TestDataProps } from "./TestData";
import "./SearchResults.css";
import { Link } from "react-router-dom";

interface SearchResultsProps {
  searchResults: TestDataProps[];
}

export default function SearchResults({ searchResults }: SearchResultsProps) {
  searchResults.length > 0;
  return (
    <div className="search-results">
      {searchResults.length > 0 ? (
        <ul className="results-list">
          {searchResults.map((result) => (
            <div key={result.id}>
              <Link to={`/entry/${result.id}`}>
                <li key={result.id}>
                  {result.dexId}. {result.name}
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
