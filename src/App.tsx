import { HashRouter } from "react-router-dom";
import Router from "./components/Router";

function App() {
  return (
    <>
      <HashRouter>
        <div className="content-body">
          <div className="screen">
            <Router />
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
