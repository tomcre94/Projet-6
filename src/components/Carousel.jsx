import React from "react";
import { useAccomodations } from "./useAccomodations";
import { useParams } from "react-router-dom";

export default function Location() {
    const { idLocation } = useParams();
    const jsonData = useAccomodations();
    console.log("idLocation", idLocation);
    console.log("useAccomodations", useAccomodations());

    if (!jsonData) {
        return <p>Chargement en cours...</p>;
    }

    const location = jsonData.find(location => location.id === idLocation);
    if (!location) {
        return <p>Location introuvable</p>;
    }

    return (
        <figure className="carousel">
            <div className="image-container">
                <img id='imgLogement' src={location.cover} alt={location.title} />
            </div>
            <div className="controls">
                <button >Précédent</button>
                <button >Suivant</button>
            </div>
        </figure>
    );
}

