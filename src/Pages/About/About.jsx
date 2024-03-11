import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import "./About.scss";
import Banner from "../../components/banner/banner";
import Imgabout from "../../ASSETS/imgapropos.jpg"


const Module = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div onClick={() => setIsOpen(!isOpen)} className={"title-module"}>
       <span className="title">{title}</span> <span className="arrow">{isOpen ? <i class="material-symbols-outlined fa-lg">
expand_more
</i> : <i class="material-symbols-outlined fa-lg">
expand_less
</i>}</span>
      </div>
      {isOpen && <p className={"description-module"}>{description}</p>}
    </div>
  );
};

const App = () => (
  <div>
    <Module title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
    <Module title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
    <Module title="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
    <Module title="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
  </div>
);

export default function About() {
  return (
    <Layout>
      <Banner imageSrc={Imgabout} imageAlt="Falaise au dessus de l'océan" text=""/>
      <App />
    </Layout>
  );
};

