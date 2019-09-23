import React from "react";

const StepNumber = props => {
  return (
    <div
      className={`step__number ${
        props.number < 10 ? "step-number--before10" : "step-number--after10"
      }`}
    >
      <p className="step__number-contents">{props.number}</p>
    </div>
  );
};

export default StepNumber;
