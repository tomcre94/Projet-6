import React from "react";
import JsonComponent from "../JsonComponent";
import Layout from "../components/layout/layout";
import Banner from "../components/banner/banner";
import homeBanner from "../ASSETS/imgbanner.jpg";
import Card from "../components/card/card";

export default function Accueil() {
  const jsonData = JsonComponent();
  return (
    <Layout>
      <Banner imageSrc={homeBanner} imageAlt="Falaise au dessus de l'océan" text="Chez vous, partout et ailleurs" />
      <figure className='card-container'>
        {jsonData.map((accomodation) => (
          <Card 
            key={accomodation.id}
            id={accomodation.id}
            title={accomodation.title}
            cover={accomodation.cover}
          /> 
        ))}
      </figure>
            {/* Autres éléments */}
    </Layout>
  );
};
