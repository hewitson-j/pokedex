import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const errorResponses = [
    "Whoops! Looks like you went to the wrong page. (⌒_⌒;) Click the button to go back.",
    "Uh oh! Looks like Rotom couldn't find the page you wanted. (>_<) Click the button to go back.",
    "No no no! This isn't the right page. (・_・ヾ) Click the button to go back.",
    "Rotom's sorry he brought you to the wrong page! (｡･_･｡)ﾉ Click the button to go back.",
  ];

  return (
    <div className="error-page">
      <h2 className="content-headers">Not Found!</h2>
      <h3>
        {errorResponses[Math.floor(Math.random() * errorResponses.length)]}
      </h3>
      <Link title="Back to Home" to={"/home"}>
        <button className="button">Back to Home</button>
      </Link>
    </div>
  );
}
