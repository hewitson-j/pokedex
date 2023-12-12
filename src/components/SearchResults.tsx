import { TestDataProps } from "./TestData";

interface SearchResultsProps {
  searchResults: TestDataProps[];
}

export default function SearchResults({ searchResults }: SearchResultsProps) {
  return (
    <ul>
      {searchResults.map((result) => (
        <li key={result.id}>{result.name}</li>
      ))}
    </ul>
  );
}
