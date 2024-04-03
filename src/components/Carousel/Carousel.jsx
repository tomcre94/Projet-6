import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Carousel = ({ imgList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImg = imgList.length;

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImg);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImg) % totalImg);
    };
    
    const img = imgList[currentIndex];

    return (
        <figure className="carousel">
            <div className="image-container">
                <img src={img} alt={`Image ${currentIndex + 1}`} />
                {totalImg > 1 && (
                    <div className="controls">
                        <button onClick={goToPrevSlide}><SlArrowLeft /></button>
                        <button onClick={goToNextSlide}><SlArrowRight /></button>
                    </div>
                )}
                {totalImg > 1 && (
                    <div className="image-count">
                        {currentIndex + 1}/{totalImg}
                    </div>
                )}
            </div>
        </figure>
    );
};

export default Carousel;
