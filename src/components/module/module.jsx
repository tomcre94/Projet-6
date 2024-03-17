
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
        {isOpen && <p className={"description-module"}>{description}</p>}
      </div>
    );
  };

  export default Module;