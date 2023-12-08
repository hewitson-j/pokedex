import { Link } from "react-router-dom";
import Header from "./Header";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-buttons">
        <Link title="Atamona" to={"/atamona"}>
          <button className="button">Learn About Atamona</button>
        </Link>
        <Link title="Search" to={"search"}>
          <button className="button">Search Pokedex</button>
        </Link>
      </div>
    </>
  );
}
