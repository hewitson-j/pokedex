import { TestDataProps } from "./TestData";
import "./SearchResults.css";

interface SearchResultsProps {
  searchResults: TestDataProps[];
}

export default function SearchResults({ searchResults }: SearchResultsProps) {
  searchResults.length > 0;
  return (
    <>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </>
  );
}
