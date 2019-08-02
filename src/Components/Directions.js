import React from "react";

const Directions = props => {
  return (
    <div className="directions">
      <h3 className="instruction__header">Directions</h3>
      {props.directions.map((step, index) => (
        <div className="directions__step" key={index}>
          <p className="step__text">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default Directions;
