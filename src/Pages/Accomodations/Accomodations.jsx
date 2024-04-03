// Accomodations.js
import "../../App.scss"
import React from "react";
import { Layout } from "../../components";
import "./Accomodations.scss"
import { useParams } from "react-router-dom";
import { useAccomodations } from "../../hooks/useAccomodations"
import Error from "../Error/Error";
import Etoiles from "../../components/Stars/stars"
import Module from "../../components/module/module"
import Tag from "../../components/Tag/tag";
import Carousel from "../../components/Carousel/Carousel";

const Accomodations = () => {
    const idLocation = useParams();
    const locationData = useAccomodations();
    const location = locationData.find(location => location.id === idLocation.id);

    if (!location) {
        return <Error />;
    }

    return (
        <Layout>
            <div className="locationWrapper">
                <Carousel imgList={location.pictures} />
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
