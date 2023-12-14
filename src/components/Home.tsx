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
          <h3>{selected.name || "Missingno."}</h3>
          <img
            src={
              selected.image ||
              "https://static.wikia.nocookie.net/pokemontowerdefense/images/c/ce/Missingno_image.png/revision/latest?cb=20180809204127"
            }
            alt={selected.alt || "Default Image"}
          />
          <p>{selected.description || "Default Description"}</p>
          <Link to={`/entry/${selected.id}`}>
            <button id="home-media-link" className="buttons">
              See More
            </button>
          </Link>
        </div>
        <HomeList handleSelect={handleSelect} />
      </div>
    </div>
  );
}
