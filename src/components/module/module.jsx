import "../../App.scss"
import React, { useState } from "react";
import "./module.scss";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Module = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen && title === "Equipements") {
        document.querySelector("main").classList.add("description-open");
    } else {
      document.querySelector("main").classList.remove("description-open");
    }
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div onClick={toggleOpen} className={"title-module"}>
        <span className="title">{title}</span>
        <span className="arrow">
          {isOpen ? <SlArrowDown /> : <SlArrowUp />}
        </span>
      </div>
      {isOpen && (
        <div className="description-module">
          {title === "Equipements" ? (
            <div className="equipments">
              {description.map((equipment, index) => (
                <p key={index}>{equipment}</p>
              ))}
            </div>
          ) : (
            <p>{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Module;
