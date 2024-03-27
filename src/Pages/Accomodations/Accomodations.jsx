import "../../App.scss"
import React from "react";
import {Layout} from "../../components";
import "./Accomodations.scss"
import { useParams } from "react-router-dom";
import { useState } from "react";
import locationData from "../../ASSETS/logements.json"
import Etoiles from "../../components/Stars/stars"
import Module from "../../components/module/module"
import Tag from "../../components/Tag/tag";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Accomodations = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const idLocation = useParams();
    const location = locationData.find(location => location.id === idLocation.id);
    if (!location) {
        return <p>Location introuvable</p>;
    }
    const imgList = location.pictures;
    const totalImg = imgList.length;

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImg);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImg) % totalImg);
    };
    const img = imgList[currentIndex];
 return (
 <Layout>
     <div className="locationWrapper">
         <figure className="carousel">
            <div className="image-container">
              <img src={img} alt={`Image ${currentIndex + 1}`}/>
              {totalImg > 1 && (
              <div className="controls">
                  <button onClick={goToPrevSlide}><SlArrowLeft /></button>
                  <button onClick={goToNextSlide}><SlArrowRight /></button>
              </div>)}
              {totalImg > 1 && (
              <div className="image-count">
                        {currentIndex + 1}/{totalImg}
              </div> )}
            </div>
        </figure>
              <div className="infoLogement">
                <h1 className="location-title"> {location.title} </h1>
                <h2 className="location-location"> {location.location} </h2>
               <section className='tags'>
                  {location.tags.map((tag, index) => (
                    <Tag key={`${tag}-${index}`} tag={tag} />
                  ))}
                </section>
              </div>
              <section className="infoLoueur">
                <div className="nomImageLoueur">
                  <div className="loueurName">
                  <h3> {location.host.name.split(' ')[0]} </h3> 
                  <h3> {location.host.name.split(' ')[1]} </h3>
                  </div>
                  <img src={location.host.picture} alt={location.host.name} />
                </div>
                <Etoiles key={`${location.rating}-${location.id}`} etoiles={location.rating} />
              </section>
            <div className="modules">
            <Module key={"description" + location.id} title={"Description"} description={location.description} />
            <Module key={"equipements" + location.id} title={"Equipements"} description={location.equipments} />
            </div>
          </div>   
 </Layout>
);
};

export default Accomodations;
