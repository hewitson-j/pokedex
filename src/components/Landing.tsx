import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const welcomeText =
    "Welcome to Professor Applewood's Unofficial Pokédex! I'm Dexter, and I will be helping you today. The world of Pokémon is vast and full of different species of Pokémon. Here in Atamona we're no different. Press the button below to get started!";

  return (
    <div className="landing">
      <div className="landing-screen">
        <div className="landing-body">
          <div className="header logo">
            <img src="Logo.png" className="pokeball-image" />
            <h1>
              Professor Applewood's
              <br />
              Unofficial Pokédex
            </h1>
          </div>
          <p id="welcome-text">{welcomeText}</p>
          <Link title="Get Started" to={"home"}>
            <button id="landing-home-button">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
