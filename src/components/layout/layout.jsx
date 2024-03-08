import React from "react";
import "./layout.scss"
import { Link } from "react-router-dom";
import logo from "../../ASSETS/logoheader.svg"
import footerLogo from '../../ASSETS/logofooter.png';

function Layout({ children }) {
  return (
    <div>
      <header>
      <img className='navbar-logo' src={logo} alt='logo Kasa' />      
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
      <main>{children}</main>
      <footer>
      <img src={footerLogo} alt='logo Kasa' />
       © 2024 Kasa. All Rights reserved
    </footer>
    </div>
  );
}

export default Layout;