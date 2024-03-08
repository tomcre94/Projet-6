import React from "react";
import "./layout.scss"
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <header>
      <p>intégrer logo ici</p>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
      <main>{children}</main>
      <footer>
     <p>Intégrer logo ici</p>
      © 2024 Kasa. All Rights reserved
    </footer>
    </div>
  );
}

export default Layout;