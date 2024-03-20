import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
//import { useAccomodations } from '../useAccomodations';
import { useParams } from "react-router-dom";

function fetchLocation() {
    const [jsonData, setJsonData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("logements.json");
          console.log("Response:", response);
          const locationList = await response.json();
          console.log("Parsed Data:", parsedData);
          setJsonData(locationList);
          console.log("jsonData", jsonData);
        } catch (error) {
          console.error(
            "Une erreur s'est produite lors de la récupération des données JSON :",
            error
          );
        }
      };
      fetchData();
    }, []);
  
const ImageCarousel = () => {
    let { idLocation } = useParams();
    const locationList = useAccomodations();
    console.log("locationList:", locationList);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0); // Reset active index when accommodation changes
    }, [idLocation]);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % locationList.pictures.length);
    };
    
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + locationList.pictures.length) % locationList.pictures.length);
    };

    if (!locationList) {
        return <div>Loading...</div>;
    }
    
    const location = locationList.filter(location => location.id === idLocation)[0];
    
    return (
        <figure className="carousel">
            <div className="image-container">
                <motion.img
                    src={location.pictures[activeIndex]}
                    alt={location.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="controls">
                <button onClick={handlePrev}>Précédent</button>
                <button onClick={handleNext}>Suivant</button>
            </div>
        </figure>
    );
};
}
export default ImageCarousel;
