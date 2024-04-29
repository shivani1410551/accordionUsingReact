import React from "react";
import Wrapper from "./Wrapper";
import Data from "/src/Accordion/AccordionData";
const Accordion = () => {
  const AccordionArray = Data.map((datum, i) => {
    return <Wrapper key={i} item={datum} />;
  });
  return (
    <>
      <div className="heading-wrapper">
        <img src="/src/Accordion/assets/images/icon-star.svg" alt="star-svg" />
        <h1>FAQs</h1>
      </div>
      {AccordionArray}
    </>
  );
};

export default Accordion;
