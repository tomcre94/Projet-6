import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageCarousel( {title, pictures} ) {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <figure className="carousel">
        <div className="image-container">
          <motion.img
            src={images[activeIndex].pictures[1]}
            alt={images[activeIndex].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="info">
          <h2>{images[activeIndex].title}</h2>
          <p>{images[activeIndex].description}</p>
          <p>Rating: {images[activeIndex].rating}</p>
        </div>
        <div className="controls">
          <button onClick={handlePrev}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </div>
      </figure>
    );
  };
  
  export default ImageCarousel;