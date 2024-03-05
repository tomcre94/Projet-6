import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./Accueil";
import APropos from "./Apropos";
import Erreur from "./Erreur";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/Apropos" component={APropos} />
        <Route component={Erreur} />
      </Switch>
    </Router>
  );
};

export default App;
