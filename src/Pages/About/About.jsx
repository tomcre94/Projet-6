import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import "./About.scss";
import Banner from "../../components/banner/banner";
import Imgabout from "../../ASSETS/imgapropos.jpg"

const Module = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {title} <span>{isOpen ? '↓' : '→'}</span>
      </div>
      {isOpen && <p>{description}</p>}
    </div>
  );
};

const App = () => (
  <>
    <Module title="Fiabilité" description="Description de la fiabilité." />
    <Module title="Respect" description="Description du respect." />
    <Module title="Service" description="Description du service." />
    <Module title="Sécurité" description="Description de la sécurité." />
  </>
);

export default function About() {
  return (
    <Layout>
      <Banner imageSrc={Imgabout} imageAlt="Falaise au dessus de l'océan" text=""/>
      le main contient 4 div composées d'un rectangle rouge et d'un texte écrit en blanc (Fiabilité, Respect, Service, Sécurité,)
      <App />
    </Layout>
  );
};

