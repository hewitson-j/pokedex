import { Link } from "react-router-dom";
import Header from "./Header";
import "./Home.css";
import HomeList from "./HomeList";
import { useState } from "react";
import { testDataArray } from "./TestData";

export default function Home() {
  const defaultEntry =
    testDataArray[Math.floor(Math.random() * testDataArray.length)];
  const [selected, setSelected] = useState(defaultEntry);

  const handleSelect = (text: string) => {
    for (const entry of testDataArray) {
      if (text === entry.name) {
        setSelected(entry);
      }
    }
    console.log(selected);
  };

  return (
    <div className="home">
      <Header />
      <div className="home-buttons">
        <Link title="Learn About Atamona" to={"/atamona"}>
          <button className="buttons">Learn About Atamona</button>
        </Link>
        <Link title="Search" to={"/search"}>
          <button className="buttons">Search Pokedex</button>
        </Link>
      </div>
      <div className="home-content">
        <div className="home-media">
          <h3>{selected.name || "#25: Pikachu"}</h3>
          <img
            src={
              selected.image ||
              "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png"
            }
            alt={selected.alt || "Default Image"}
          />
          <p>{selected.description || "Default Description"}</p>
        </div>
        <HomeList handleSelect={handleSelect} />
      </div>
    </div>
  );
}
