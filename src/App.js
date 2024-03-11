import React from "react";
import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Accueil from "./Pages/Home/Accueil";
import About from "./Pages/About/About.jsx";
import Erreur from "./Pages/Error/Erreur";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  );
}
