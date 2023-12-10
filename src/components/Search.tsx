import { Link } from "react-router-dom";

export default function Search() {
  return (
    <>
      <h2 className="content-headers">Search Pokedex</h2>
      <Link title="Home" to={"/home"}>
        <button className="buttons">Back to Home</button>
      </Link>
    </>
  );
}
