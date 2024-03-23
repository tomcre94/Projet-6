import React from "react";
import homeBanner from "../../ASSETS/imgbanner.jpg";
import { DisplayCards, Layout } from "../../components";
import Banner from "../../components/banner/banner";
import "./Accueil.scss";

export default function Accueil() {
  return (
    <Layout>
      <Banner imageSrc={homeBanner} imageAlt="Falaise au dessus de l'océan" text="Chez vous, partout et ailleurs" />
      <div className="gallery">
      <DisplayCards />
      </div>
    </Layout>
  );
};
