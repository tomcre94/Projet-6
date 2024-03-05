// Layout.js

import React from "react";
import Header from "./Components/Header"; // Votre composant d'en-tête
import Footer from "./Components/Footer"; // Votre composant de pied de page

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
