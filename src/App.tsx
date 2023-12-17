import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";

function App() {
  return (
    <>
      <BrowserRouter basename="/pokedex">
        <div className="content-body">
          <div className="screen">
            <Router />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
