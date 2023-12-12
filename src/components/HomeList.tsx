import { testDataArray } from "./TestData";
import "./HomeList.css";

interface HomeListProps {
  handleSelect: (name: string) => void;
}

export default function HomeList({ handleSelect }: HomeListProps) {
  return (
    <div className="home-list">
      <ul>
        {testDataArray.map((entry) => (
          <li
            key={entry.id}
            onClick={() => {
              handleSelect(entry.name);
            }}
          >
            {entry.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
