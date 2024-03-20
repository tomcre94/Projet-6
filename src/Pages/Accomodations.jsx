import React from "react";
import Layout from "../components/layout/layout";
import ImageCarousel from "../components/Carousel/Carousel";

const Accueil = () => {
 return (
 <Layout>
 Au clic sur une card, on arrive sur cette Page

 Cette page se charge en prenant en éléments certains des suivants : id, title, cover
 Il y a sur la page :
 un caroussel,
 le titre du logement
 le lieu du logement 
 le nom du propriétaire
la notation du logement 
tags
deux modules (un avec la description et l'autre avec les équipements)
 <ImageCarousel />
 </Layout>
);
};

export default Accueil;
