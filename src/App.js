import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Switch from "react-switch";
import Accueil from "./Accueil";
import APropos from "./Apropos";
import Erreur from "./Erreur";

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
