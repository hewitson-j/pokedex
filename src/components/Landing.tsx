import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <h1>Professor Applewood's Unofficial Pokédex</h1>
      <p>Welcome to Professor Applewood's Unofficial Pokédex!</p>
      <Link title="Get Started" to={"home"}>
        <button>Home</button>
      </Link>
    </>
  );
}
