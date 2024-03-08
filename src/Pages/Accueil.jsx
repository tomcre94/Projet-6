import React from "react";
import Layout from "../components/layout/layout";
import Banner from "../components/banner/banner";
import homeBanner from "../ASSETS/imgbanner.jpg";

export default function Accueil() {
  return (
    <Layout>
      <Banner imageSrc={homeBanner} imageAlt="Falaise au dessus de l'océan" text="Chez vous, partout et ailleurs" />
            {/* Autres éléments */}
    </Layout>
  );
};
