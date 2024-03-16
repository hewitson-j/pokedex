import { Link } from "react-router-dom";
import Header from "./Header";
import "./Home.css";
import HomeList from "./HomeList";
import { useEffect, useState } from "react";
import PokemonType from "./Interfaces";
import supabase from "../supabaseconfig";

export default function Home() {
  const defaultEntry: PokemonType = {
    id: 2000,
    name: "Welcome!",
    dex_id: 0,
    weight: 0,
    height: 0,
    description: "Click on a Pokedex entry to begin!",
    type1: 19,
    gender: 4,
    image_url:
      "https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png",
  };
  const [selected, setSelected] = useState<PokemonType>(defaultEntry);

  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState<PokemonType[]>([]);

  const fetchPokemon = async () => {
    const { data, error } = await supabase.from("pokemon").select("*");
    if (error) {
      console.log("Error loading data: ", error);
    } else {
      setEntries(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
    setIsLoading(false);
    console.log(entries);
  }, []);

  const handleSelect = (text: string) => {
    for (const entry of entries) {
      if (text === entry.name) {
        setSelected(entry);
      }
    }
    console.log(selected);
  };

  return (
    <main className="home">
      <Header />
      <nav className="home-buttons">
        <Link title="Learn About Atamona" to={"/atamona"}>
          <button className="buttons">Learn About Atamona</button>
        </Link>
        <Link title="Search" to={"/search"}>
          <button className="buttons">Search Pokedex</button>
        </Link>
      </nav>
      <div className="home-content">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="home-media">
            <h3>
              {selected.dex_id === 0 ? "" : `${selected.dex_id}.`}{" "}
              {selected.name || "Missingno."}
            </h3>
            <img
              src={
                selected.image_url ||
                "https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png"
              }
              alt={selected.name || "Default Image"}
              onError={(e) => {
                const image = e.target as HTMLImageElement;
                image.src =
                  "https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png";
                image.alt = selected.name + " - Default Image";
              }}
            />
            <p>{selected.description || "Default Description"}</p>
            {selected.dex_id === 0 ? (
              ""
            ) : (
              <Link to={`/entry/${selected.dex_id}`}>
                <button id="home-media-link" className="buttons">
                  See More
                </button>
              </Link>
            )}
          </div>
        )}
        <HomeList handleSelect={handleSelect} />
      </div>
    </main>
  );
}
