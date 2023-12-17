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
    }
  };
  const fetchGenderData = async () => {
    const { error, data } = await supabase.from("gender").select("*");

    if (error) {
      console.log("Error loading: ", error);
    } else {
      console.log(data);
      setGenders(data);
    }
  };
  const fetchTypeData = async () => {
    const { error, data } = await supabase.from("type").select("*");

    if (error) {
      console.log("Error loading: ", error);
    } else {
      console.log(data);
      setTypes(data);
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
      {entry ? (
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
        <>
          <p>Not found.</p>
          <Link title="Search" to={"/search"}>
            <button className="buttons">Back to Search</button>
          </Link>
        </>
      )}
    </div>
  );
}
