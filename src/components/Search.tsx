import { Link } from "react-router-dom";
import "./Search.css";
import SearchResults from "./SearchResults";
import { useState } from "react";
import supabase from "../supabaseconfig";
import PokemonType from "./Interfaces";

export default function Search() {
  const [searchType, setSearchType] = useState("number");
  const [searchRan, setSearchRan] = useState(false);
  const [searchResults, setSearchResults] = useState<PokemonType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  interface SearchProps {
    searchTerm: string;
    searchType: string;
  }

  const fetchPokemon = async ({ searchTerm, searchType }: SearchProps) => {
    setIsLoading(true);
    if (searchType === "name") {
      if (typeof searchTerm !== "string") {
        alert("Please type in a valid search term.");
        return;
      }
      const { data, error } = await supabase
        .from("pokemon")
        .select("*")
        .ilike("name", `%${searchTerm}%`)
        .order("dex_id", { ascending: true });
      if (error) {
        console.log("Error loading: ", error);
      } else {
        setSearchResults(data);
        setSearchRan(true);
        setIsLoading(false);
        console.log(data);
      }
    } else if (searchType === "number") {
      if (typeof parseInt(searchTerm) !== "number") {
        alert("Please type in a number");
        return;
      }
      const { data, error } = await supabase
        .from("pokemon")
        .select("*")
        .eq("dex_id", `${parseInt(searchTerm)}`)
        .order("dex_id", { ascending: true });
      if (error) {
        console.log("Error loading: ", error);
      } else {
        setSearchResults(data);
        setSearchRan(true);
        setIsLoading(false);
        console.log(data);
      }
    }
  };

  return (
    <div className="search">
      <h2 className="content-headers" id="search-content-header">
        Search Pokedex
      </h2>
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
            setSearchRan(false);
            setIsLoading(true);
            fetchPokemon({ searchTerm, searchType });
          }}
        >
          Search
        </button>
      </div>
      <div className="search-results">
        <h3>Search Results:</h3>
        {!isLoading ? <></> : <p>Loading...</p>}
        {searchRan ? <SearchResults searchResults={searchResults} /> : <></>}
      </div>
      <Link title="Home" to={"/home"}>
        <button id="search-home-button" className="buttons">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
