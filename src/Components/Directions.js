import React from "react";
import StepNumber from "./StepNumber";

const Directions = props => {
  return (
    <div className="directions">
      <h3 className="instruction__header">Directions</h3>

      <a
        className="directions__yt-link"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch on YouTube
      </a>

      {props.directions
        .filter(step => step.length > 0)
        .map((step, index) => (
          <div className="directions__step" key={index}>
            <StepNumber number={index + 1} />
            <p className="step__text">{step}</p>
          </div>
        ))}
      <div className="directions__step--complete">
        <svg viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="7.5" />
          <polyline points="3.9,7.3 7.1,10.5 14.6,3 " />
        </svg>
        <p>Complete</p>
      </div>
    </div>
  );
};

export default Directions;