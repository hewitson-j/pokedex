import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}
