import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Sector01 from "../pages/Sector01";
import Sector02 from "../pages/Sector02";
import Sector03 from "../pages/Sector03";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-3">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/s1" element={<Sector01 />} />
          <Route path="/s2" element={<Sector02 />} />
          <Route path="/s3" element={<Sector03 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
