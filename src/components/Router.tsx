import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import Atamona from "./Atamona";
import ErrorPage from "./ErrorPage";
import Search from "./Search";
import EntryPage from "./EntryPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="atamona" element={<Atamona />} />
        <Route path="search" element={<Search />} />
        <Route path="entry/:itemId" element={<EntryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
