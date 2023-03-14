import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
