import "./HomeList.css";
import { useEffect, useState } from "react";
import supabase from "../supabaseconfig";
import PokemonData from "./PokemonData";

interface HomeListProps {
  handleSelect: (name: string) => void;
}

export default function HomeList({ handleSelect }: HomeListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState<PokemonData[]>([]);

  const fetchPokemon = async () => {
    const { data, error } = await supabase
      .from("pokemon")
      .select("*")
      .order("dex_id", { ascending: true });
    if (error) {
      console.log("Error loading data: ", error);
    } else {
      setEntries(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
    console.log(entries);
  }, []);

  return (
    <div className="home-list">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li
              key={entry.id}
              onClick={() => {
                handleSelect(entry.name);
              }}
            >
              {entry.dex_id}. {entry.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
