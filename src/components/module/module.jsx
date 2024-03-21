
import React, { useState } from "react";
import "./module.scss"
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Module = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="collapse">
          <div onClick={() => setIsOpen(!isOpen)} className={"title-module"}>
              <span className="title">{title}</span>
              <span className="arrow">{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
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