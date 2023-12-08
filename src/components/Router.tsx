import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import Atamona from "./Atamona";
import ErrorPage from "./ErrorPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="atamona" element={<Atamona />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
