import React from "react";
import Header from "./components/Header"; // Votre composant d'en-tête
import Footer from "./components/Footer"; // Votre composant de pied de page

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
