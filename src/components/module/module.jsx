
import React, { useState } from "react";
import "./module.scss"

const Module = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="collapse">
        <div onClick={() => setIsOpen(!isOpen)} className={"title-module"}>
         <span className="title">{title}</span> <span className="arrow">{isOpen ? <i class="material-symbols-outlined fa-lg">
  expand_more
  </i> : <i class="material-symbols-outlined fa-lg">
  expand_less
  </i>}</span>
        </div>
        {isOpen && <p className={"description-module"}>{description}</p>}
      </div>
    );
  };

  export default Module;