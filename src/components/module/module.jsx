import React, { useState } from "react";
import "./module.scss";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Module = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    const firstChild = React.Children.toArray(children)[0];
    if (!isOpen && firstChild.type === "h2" && firstChild.props.children === "Equipements") {
      document.querySelector("main").classList.add("description-open");
    } else {
      document.querySelector("main").classList.remove("description-open");
    }
  };
  

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div onClick={toggleOpen} className={"title-module"}>
        <span className="title">{React.Children.toArray(children)[0]}</span>
        <span className="arrow">
          {isOpen ? <SlArrowDown /> : <SlArrowUp />}
        </span>
      </div>
      {isOpen && (
        <div className="description-module">
        {React.Children.toArray(children).slice(1)}
        </div>
      )}
    </div>
  );
};

export default Module;
