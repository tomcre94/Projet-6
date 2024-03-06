import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import APropos from "./Pages/Apropos";
import Erreur from "./Pages/Erreur";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<APropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  );
}
