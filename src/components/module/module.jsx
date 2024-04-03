import React, { useState } from "react";
import "./module.scss";
import { SlArrowDown } from "react-icons/sl";

const Module = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    const firstChild = React.Children.toArray(children)[0];
    if (!isOpen && firstChild.type === "h2") {
      document.querySelector("main").classList.add("description-open");
    } else {
      document.querySelector("main").classList.remove("description-open");
    }
  };
  

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div onClick={toggleOpen} className={"title-module"}>
        <span className="title">{React.Children.toArray(children)[0]}</span>
        <span className={`arrow ${isOpen ? "open" : "closed"}`}>
          <SlArrowDown />
        </span>
      </div>
    <div className={`description-module ${isOpen ? "open" : ""}`}>
     {React.Children.toArray(children).slice(1)}
    </div>
  </div>
  );
};

export default Module;
