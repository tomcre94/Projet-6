import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import APropos from "./Pages/Apropos";
import Erreur from "./Pages/Erreur";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Apropos" element={<APropos />} />
        <Route element={<Erreur />} />
      </Routes>
    </Router>
  );
}
