import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./layout.scss";
import logo from "../../ASSETS/logoheader.svg";
import footerLogo from "../../ASSETS/logofooter.png";

function Layout({ children }) {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  // Mettre à jour la page active à chaque changement d'URL
  useEffect(() => {
    // Fonction pour définir la page active en fonction de l'URL courante
    const setActivePageByUrl = () => {
      const pathname = location.pathname;
      if (pathname === "/") {
        setActivePage("Accueil");
      } else if (pathname === "/about") {
        setActivePage("A propos");
      }
    };

    setActivePageByUrl();
  }, [location]);

  return (
    <div>
      <header>
        <img className="navbar-logo" src={logo} alt="logo Kasa" />
        <nav>
          <Link
            to="/"
            className={activePage === "Accueil" ? "active" : ""}
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className={activePage === "A propos" ? "active" : ""}
          >
            A propos
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <img src={footerLogo} alt="logo Kasa" />
        <p>© 2024 Kasa. All Rights reserved</p>
      </footer>
    </div>
  );
}

export default Layout;
