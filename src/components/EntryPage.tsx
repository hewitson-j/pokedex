import { Link, Navigate, useParams } from "react-router-dom";
import "./EntryPage.css";
import supabase from "../supabaseconfig";
import { useEffect, useState } from "react";
import PokemonType, { GenderProps, TypeProps } from "./Interfaces";

export default function EntryPage() {
  const { itemId } = useParams();

  const [entries, setEntries] = useState<PokemonType[]>([]);
  const [genders, setGenders] = useState<GenderProps[]>([]);
  const [types, setTypes] = useState<TypeProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const notFoundText = [
    "Whoops! The Pokemon you're looking for is not currently in the Pokedex! (ノ_<、) But don't worry, Rotom will bring you back if you click one of the buttons below.",
    "Oh no! You've come to the not found page. (╯°□°）not to worry, Rotom will bring you back if you click one of the below buttons.",
    "Uh oh! You looked for a Pokemon which isn't in the Pokedex yet! (╯︵ ┻━┻) Don't worry though, Rotom will bring you back. Click one of the buttons below.",
  ];

  // Data Fetchers
  const fetchPokemonEntry = async () => {
    const { error, data } = await supabase
      .from("pokemon")
      .select("*")
      .eq("dex_id", itemId);

    if (error) {
      console.log("Error loading: ", error);
    } else {
      setEntries(data);
      console.log(data);
      setIsLoading(false);
    }
  };
  const fetchGenderData = async () => {
    const { error, data } = await supabase.from("gender").select("*");

    if (error) {
      console.log("Error loading: ", error);
    } else {
      console.log(data);
      setGenders(data);
      setIsLoading(false);
    }
  };
  const fetchTypeData = async () => {
    const { error, data } = await supabase.from("type").select("*");

    if (error) {
      console.log("Error loading: ", error);
    } else {
      console.log(data);
      setTypes(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGenderData();
    fetchTypeData();
    fetchPokemonEntry();
  }, []);

  if (typeof itemId !== "string") {
    return <Navigate to="/error" />;
  }

  // Data saved to variables
  const entry = entries[0];
  const type1 = types.find((type) => type.id === entry?.type1);
  const type2 = types.find((type) => type.id === entry?.type2);
  const gender = genders.find((gender) => gender.id === entry?.gender);

  return (
    <div>
      {!isLoading ? (
        entry ? (
          <>
            <div className="entry-page">
              <h2>
                #{entry.dex_id}: {entry.name}
              </h2>
              <img src={entry.image_url} alt={entry.name} />

              <div className="types-body">
                <div
                  className="types"
                  style={{ backgroundColor: `${type1?.color}` }}
                >
                  {type1?.name}
                </div>
                {type2 && (
                  <div
                    className="types"
                    style={{ backgroundColor: `${type2?.color}` || "inherit" }}
                  >
                    {type2?.name}
                  </div>
                )}
              </div>
              <div className="data-body">
                <p>
                  <b>Height:</b>
                  <br /> {entry.height} m
                </p>
                <p>
                  <b>Weight:</b>
                  <br /> {entry.weight} kgs
                </p>
                <p title={gender?.name}>
                  <b>Genders:</b>
                  <br /> {gender?.description}
                </p>
              </div>
              <p id="entry-description">
                <b>Description:</b>
                <br /> {entry.description}
              </p>
              <div className="entry-buttons">
                <Link title="Search" to={"/search"}>
                  <button className="buttons">Back to Search</button>
                </Link>
                <Link title="Search" to={"/home"}>
                  <button className="buttons">Back to Home</button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="entry-page-not-found">
            <h2>Not Found</h2>
            <p>
              {notFoundText[Math.floor(Math.random() * notFoundText.length)]}
            </p>
            <div className="entry-buttons">
              <Link title="Search" to={"/search"}>
                <button className="buttons">Back to Search</button>
              </Link>
              <Link title="Home" to={"/home"}>
                <button className="buttons">Back to Home</button>
              </Link>
            </div>
          </div>
        )
      ) : (
        <h2 className="entry-loading">Loading...</h2>
      )}
    </div>
  );
}
