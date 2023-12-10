import { Link } from "react-router-dom";
import Header from "./Header";
import "./Home.css";
import HomeList from "./HomeList";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-buttons">
        <Link title="Learn About Atamona" to={"/atamona"}>
          <button className="button">Learn About Atamona</button>
        </Link>
        <Link title="Search" to={"/search"}>
          <button className="button">Search Pokedex</button>
        </Link>
      </div>
      <div className="home-content">
        <div className="home-media">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png"
            alt="Default Image"
          />
          <p>
            This is the default description for a pokemon. Please feel free to
            look around more.
          </p>
        </div>
        <HomeList />
      </div>
    </div>
  );
}
