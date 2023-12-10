import { testDataArray } from "./TestData";
import "./HomeList.css";

export default function HomeList() {
  return (
    <div className="home-list">
      <ul>
        {testDataArray.map((entry) => (
          <li key={entry.id}>{entry.name}</li>
        ))}
      </ul>
    </div>
  );
}
