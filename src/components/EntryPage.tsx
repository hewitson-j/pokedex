import { Link, Navigate, useParams } from "react-router-dom";
import "./EntryPage.css";
import { testDataArray, genderArray, typeArray } from "./TestData";

export default function EntryPage() {
  const { itemId } = useParams();

  if (typeof itemId !== "string") {
    return <Navigate to="/error" />;
  }

  const item = testDataArray.find((entry) => entry.id === parseInt(itemId));
  const type1 = typeArray.find((type) => type.id === item?.type1);
  const type2 = typeArray.find((type) => type.id === item?.type2);
  const gender = genderArray.find((gender) => gender.id === item?.gender);

  return (
    <div>
      {item ? (
        <>
          <div className="entry-page">
            <h2>
              #{item.dexId}: {item.name}
            </h2>
            <img src={item.image} alt={item.alt} />

            <div className="types-body">
              <div
                className="types"
                style={{ backgroundColor: `${type1?.color}` }}
              >
                {type1?.type}
              </div>
              {type2 && (
                <div
                  className="types"
                  style={{ backgroundColor: `${type2?.color}` || "inherit" }}
                >
                  {type2?.type}
                </div>
              )}
            </div>
            <div className="data-body">
              <p>
                <b>Height:</b>
                <br /> {item.height} m
              </p>
              <p>
                <b>Weight:</b>
                <br /> {item.weight} kgs
              </p>
              <p title={gender?.genderType}>
                <b>Genders:</b>
                <br /> {gender?.genderChar}
              </p>
            </div>
            <p id="entry-description">
              <b>Description:</b>
              <br /> {item.description}
            </p>
            <Link title="Search" to={"/search"}>
              <button className="buttons">Back to Search</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <p>Not found.</p>
          <Link title="Search" to={"/search"}>
            <button className="buttons">Back to Search</button>
          </Link>
        </>
      )}
    </div>
  );
}
