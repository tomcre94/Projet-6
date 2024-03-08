import React from "react";
import "./layout.scss"

function Layout({ children }) {
  return (
    <div>
      <header>
      <p>intégrer logo ici</p>
      <nav>
        <a href="/">Accueil</a>
        <a href="/Apropos">A propos</a>
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