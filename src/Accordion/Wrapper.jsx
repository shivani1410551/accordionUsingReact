import React from "react";
import Plus from "/src/Accordion/assets/images/icon-plus.svg";
import Minus from "/src/Accordion/assets/images/icon-minus.svg";
import { useState } from "react";
const Wrapper = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <button
        type={"button"}
        className="toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{props.item.question}</p>
        <div className="icons">
          <img
            src={Plus}
            alt="plus"
            className={` plus ${isOpen ? "displayNone" : "displayBlock"}`}
          />
          <img
            src={Minus}
            alt="minus"
            className={` minus ${isOpen ? "displayBlock" : "displayNone"}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className={`content ${isOpen ? "isOpen" : ""}`}>
          <p>{props.item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Wrapper;
