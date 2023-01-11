import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyProfile from "./components/CompanyProfile";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<CompanyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
