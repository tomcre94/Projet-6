import React from "react";
import { Layout } from "../../components";
import "./Accomodations.scss";
import { useParams } from "react-router-dom";
import { useAccomodations } from "../../hooks/useAccomodations";
import Error from "../Error/Error";
import Etoiles from "../../components/Stars/stars";
import Module from "../../components/module/module";
import Tag from "../../components/Tag/tag";
import Carousel from "../../components/Carousel/Carousel";

const Accomodations = () => {
  const { id } = useParams();
  const locationData = useAccomodations();
  const location = locationData.find(location => location.id === id);

  if (!location) {
    return <Error />;
  }

  return (
    <Layout>
      <div className="locationWrapper">
        <Carousel imgList={location.pictures} />
        <div className="infoLogement">
          <h1 className="location-title">{location.title}</h1>
          <h2 className="location-location">{location.location}</h2>
          <section className='tags'>
            {location.tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} tag={tag} />
            ))}
          </section>
        </div>
        <section className="infoLoueur">
          <div className="nomImageLoueur">
            <div className="loueurName">
              <h3>{location.host.name.split(' ')[0]}</h3>
              <h3>{location.host.name.split(' ')[1]}</h3>
            </div>
            <img src={location.host.picture} alt={location.host.name} />
          </div>
          <Etoiles key={`${location.rating}-${location.id}`} etoiles={location.rating} />
        </section>
        <div className="modules">
          <Module>
            <h2>Description</h2>
            <p>{location.description}</p>
          </Module>
          <Module>
            <h2>Equipements</h2>
            <div className="equipments">
              <ul>
              {location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
              </ul>
            </div>
          </Module>
        </div>
      </div>
    </Layout>
  );
};

export default Accomodations;
