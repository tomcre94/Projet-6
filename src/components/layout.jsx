import React from "react";

function Layout({ children }) {
  return (
    <div>
      <header>
      <nav>
        <p>intégrer logo ici</p>
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