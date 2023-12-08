import { Link } from "react-router-dom";
import "./Atamona.css";

export default function Atamona() {
  return (
    <div className="atamona">
      <h2 className="content-headers">The Region of Atamona</h2>
      <div className="atamona-content">
        <img src="Atamona.jpg" alt="Atamona Map" id="atamona-image" />
        <p>This is test text.</p>
      </div>
      <Link title="Home" to={"/home"}>
        <button className="button" id="atamona-home-button">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
