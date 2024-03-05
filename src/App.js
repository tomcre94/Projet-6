import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importez seulement Route
import Accueil from "./Pages/Accueil";
import APropos from "./Pages/Apropos";
import Erreur from "./Pages/Erreur";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Accueil} />
        <Route path="/Apropos" component={APropos} />
        <Route component={Erreur} />
      </Routes>
    </Router>
  );
};

export default App;
