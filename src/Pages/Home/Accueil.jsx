import React from "react";
import JsonComponent from "../../components/DisplayCards";
import Layout from "../../components/layout/layout";
import Banner from "../../components/banner/banner";
import homeBanner from "../../ASSETS/imgbanner.jpg";
import "./Accueil.scss"

export default function Accueil() {
  return (
    <Layout>
      <Banner imageSrc={homeBanner} imageAlt="Falaise au dessus de l'océan" text="Chez vous, partout et ailleurs" />
      <div className="gallery">
      <JsonComponent />
      </div>
    </Layout>
  );
};
