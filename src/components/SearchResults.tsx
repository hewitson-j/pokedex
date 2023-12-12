import { TestDataProps } from "./TestData";
import "./SearchResults.css";

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
            <li key={result.id}>
              {result.dexId}. {result.name}
            </li>
          ))}
        </ul>
      ) : (
        <p id="no-results">No results found.</p>
      )}
    </div>
  );
}
