import { Link } from "react-router-dom";
import "./Atamona.css";

export default function Atamona() {
  return (
    <div className="atamona">
      <h2 className="content-headers">The Region of Atamona</h2>
      <div className="atamona-content">
        <img src="Atamona.jpg" alt="Atamona Map" id="atamona-image" />
        <div className="atamona-description">
          <p>
            Welcome to the region of Atamona, a captivating region filled with
            diverse landscapes and a rich array of Pokémon. From the towering
            peaks of its vast mountains to the depths of its low valleys, from
            the vastness of its deserts to the icy tips of its mountaintops,
            Atamona offers an adventure for every kind of Pokémon trainer. This
            region is not just a land of geographical wonders but also a hub of
            bustling communities and mysterious locales, each with its unique
            charm and challenges. Throughout the vast region there are several
            major settlements and points of interest:
          </p>
          <br />
          <ul>
            <li>
              <b>Harvestdale:</b> Your journey begins in this quaint farming
              community, nestled on the edge of the enchanting Valley of
              Paradise. Harvestdale epitomizes rural charm, with its close-knit
              community and serene farmlands.
            </li>
            <li>
              <b>Boscana:</b> Surrounded by a lush forest, Boscana is home to
              the second grass gym. This town is a perfect blend of nature and
              civilization, offering a peaceful retreat for nature-loving
              trainers.
            </li>
            <li>
              <b>Honeydune:</b> Famous for its unique desert apiaries, Honeydune
              hosts the third bug gym. The town is an oasis in the desert,
              reflecting the resilience of both its inhabitants and the local
              Pokémon.
            </li>
            <li>
              <b>West's Cross:</b> This old west town, home to the fourth ground
              gym, is a nod to history and tradition. West's Cross is a
              testament to the enduring spirit of pioneers and explorers.
            </li>
            <li>
              <b>Harvestdale:</b> Your journey begins in this quaint farming
              community, nestled on the edge of the enchanting Valley of
              Paradise. Harvestdale epitomizes rural charm, with its close-knit
              community and serene farmlands.
            </li>
            <li>
              <b>Carrilon:</b> Known for its bustling rail stations, Carrilon
              houses the fifth fighting gym. This town is a hub of activity,
              where the past meets the present in a vibrant community.
            </li>
            <li>
              <b>Harvestdale:</b> Your journey begins in this quaint farming
              community, nestled on the edge of the enchanting Valley of
              Paradise. Harvestdale epitomizes rural charm, with its close-knit
              community and serene farmlands.
            </li>
            <li>
              <b>Irondale:</b> Home to the sixth steel gym and a renowned
              library, Irondale is a center of knowledge and innovation. This
              town combines the charm of academia with the strength of steel.
            </li>
            <li>
              <b>Marble Arch:</b> Famous for its natural stone arches, Marble
              Arch hosts the seventh psychic gym. The town is a gateway to the
              mysteries of the mind and the wonders of nature.
            </li>
            <li>
              <b>Snyder's Slopes:</b> This winter sports paradise, home to the
              eighth ice gym, is a haven for thrill-seekers and adventurers.
              Snyder's Slopes offers a chilly challenge to trainers of all
              levels.
            </li>
            <li>
              <b>Soleana:</b> The heart of Atamona, Soleana is home to the Elite
              Four and the Syndicate. This city is a melting pot of cultures,
              ideas, and hidden agendas, offering the ultimate challenge to
              aspiring champions.
            </li>
          </ul>
          <br />
          <p>
            Among the diverse locations of Atamona is the Valley of Paradise: a
            mystical area, reminiscent of a natural wonder, is where the an
            ancient power slumbers. The Valley of Paradise is a place of beauty
            and mystery, beckoning the bravest of trainers to uncover its
            secrets.
          </p>
          <br />
          <p>
            In Atamona, every path leads to discovery, and every challenge is an
            opportunity for growth. Prepare to embark on a journey filled with
            awe-inspiring landscapes, formidable gyms, and unforgettable
            adventures. Welcome to Atamona, where legends come to life!
          </p>
        </div>
      </div>
      <Link title="Home" to={"/home"}>
        <button className="button" id="atamona-home-button">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
