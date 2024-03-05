import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Switch from "react-switch";
import Accueil from "./Pages/Accueil";
import APropos from "./Pages/Apropos";
import Erreur from "./Pages/Erreur";

const App = () => {
  return (
    <Router>
      <Switch>
        <Routes>
          <Route path="/" exact component={Accueil} />
          <Route path="/Apropos" component={APropos} />
          <Route component={Erreur} />
        </Routes>
      </Switch>
    </Router>
  );
};

export default App;
