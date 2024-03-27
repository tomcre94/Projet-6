import "../../App.scss"
import React from "react";
import {Layout} from "../../components";
import "./Error.scss"
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Layout>
      <h1 className="errorH1">404</h1>
      <p className="ErrorMsg">Oups! La page que vous demandez n'existe pas.</p>
      <div className="ReturnHome"><Link to="/">Retourner sur la page d'accueil</Link></div>
    </Layout>
  );
};
