import React from "react";
import Layout from "../../components/layout/layout";
import "./About.scss";
import Banner from "../../components/banner/banner";
import Imgabout from "../../ASSETS/imgapropos.jpg"

export default function About() {
  return (
    <Layout>
      <Banner imageSrc={Imgabout} imageAlt="Falaise au dessus de l'océan" text=""/>

      <h1>À propos</h1>
      {/* Autres éléments */}
    </Layout>
  );
};

