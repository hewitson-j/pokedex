import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header" style={{ display: "flex", flexDirection: "row" }}>
        <img src="Logo.png" alt="Logo" className="pokeball-image" />
        <h1>
          Professor Applewood's <br /> Unofficial Pokédex
        </h1>
      </header>
    </>
  );
}
