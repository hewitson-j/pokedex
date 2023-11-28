import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header" style={{ display: "flex", flexDirection: "row" }}>
        <img src="Logo.png" />
        <h1>
          Professor Applewood's <br /> Unofficial Pokédex
        </h1>
      </div>
    </>
  );
}
