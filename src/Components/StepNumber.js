import React from "react";

const StepNumber = props => {
  return (
    <div className="step__number">
      <p className="step__number-contents">{props.number}</p>
    </div>
  );
};

export default StepNumber;
