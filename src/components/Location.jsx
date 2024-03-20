import { useParams } from "react-router-dom";
import { useState } from 'react';
import locationData from "../ASSETS/logements.json"
import Etoiles from "./Stars/stars"
import Module from "./module/module"
import Tag from "./Tag/tag";

export default function Location() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const idLocation = useParams();
    const location = locationData.find(location => location.id === idLocation.id);
    if (!location) {
        return <p>Location introuvable</p>;
    }
    const imgList = location.pictures;

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imgList.length) % imgList.length);
    };
    const img = imgList[currentIndex];
    return (
        <div className="locationWrapper">
        <figure className="carousel">
            <div className="image-container">
            <img src={img} alt={`Image ${currentIndex + 1}`}/>
            </div>
            <div className="controls">
                <button onClick={goToPrevSlide}>Précédent</button>
                <button onClick={goToNextSlide}>Suivant</button>
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
                  <h3> {location.host.name} </h3>
                  <img src={location.host.picture} alt={location.host.name} />
                </div>
                <Etoiles key={`${location.rating}-${location.id}`} etoiles={location.rating} />
              </section>
            <div className="modules">
            <Module key={"description" + location.id} title={"Description"} description={location.description} />
            <Module key={"equipements" + location.id} title={"Equipements"} description={location.equipments} />
            </div>
                       
 le nom du propriétaire
tags
</div>   
    );
}