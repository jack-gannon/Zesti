import React from "react";

const Result = props => {
  return (
    <div className="search-result">
      <img className="result__thumbnail" src={props.img} alt={props.name}></img>
      <h4 className="result__name">{props.name}</h4>
    </div>
  );
};

export default Result;
