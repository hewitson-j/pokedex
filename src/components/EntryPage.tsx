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

  const gender = genderArray.find((gender) => gender.id === item?.gender);

  return (
    <div>
      {item ? (
        <>
          <div>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.alt} />
            <div>
              <p>{type1?.type}</p>
              <p>{item.type2}</p>
              <p>Height: {item.height} m.</p>
              <p>Weight: {item.weight} kgs.</p>
              <p>Genders: {gender?.genderType}</p>
            </div>
            <p>{item.description}</p>
          </div>
          <Link title="Search" to={"/search"}>
            <button className="buttons">Back to Search</button>
          </Link>
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
