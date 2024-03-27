import "../../App.scss"
import React from "react";
import {Layout} from "../../components";
import "./About.scss";
import Banner from "../../components/banner/banner";
import Imgabout from "../../ASSETS/imgapropos.jpg"
import { aboutList } from "./aboutData";
import Module from "../../components/module/module";

const About = () => {
  return (
    <Layout>
      <Banner imageSrc={Imgabout} imageAlt="Falaise au-dessus de l'océan" text="" />
      <div className="ModulesAbout">
      {aboutList.map((module, index) => (
        <Module key={index} title={module.title} description={module.content} />
      ))}
      </div>
    </Layout>
  );
};

export default About;

