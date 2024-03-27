import React from "react";
import homeBanner from "../../ASSETS/imgbanner.jpg";
import { DisplayCards, Layout } from "../../components";
import Banner from "../../components/banner/banner";
import "./Home.scss";

export default function Home() {
  return (
    <Layout>
      <Banner imageSrc={homeBanner} imageAlt="Falaise au dessus de l'océan" text="Chez vous, partout et ailleurs" />
      <div className="gallery">
      <DisplayCards />
      </div>
    </Layout>
  );
};
