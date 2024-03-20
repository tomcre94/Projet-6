import { useParams } from "react-router-dom";
import locationData from "../ASSETS/logements.json"

export default function Location() {
    const idLocation = useParams();
    const location = locationData.find(location => location.id === idLocation.id);
    console.log("locationtest", location);
    if (!location) {
        return <p>Location introuvable</p>;
    }

    return (
        <figure className="carousel">
            <div className="image-container">
                <img id='imgLogement' src={location.cover} alt={location.title} />
            </div>
            <div className="controls">
                <button>Précédent</button>
                <button>Suivant</button>
            </div>
           {/*
            <Etoiles key={`${logement?.rating}-${logement?.id}`} etoiles={location.rating} />
            <div className="modules">
            <Module key={`${'description'}-${logement?.id}`} title={Description} description={location.description} />
            <Module key={`${'equipements'}-${logement?.id}`} title={Equipements} description={location.equipements} />
            </div>
           
           */}


            
 le titre du logement
 le lieu du logement 
 le nom du propriétaire
tags
        </figure>
    );
}