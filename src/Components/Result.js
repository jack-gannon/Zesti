import React from "react";
import { Link } from "@reach/router";

const Result = props => {
  return (
    <Link to={`/recipe/${props.id}`}>
      <div className="search-result">
        <img
          className="result__thumbnail"
          src={props.img}
          alt={props.name}
        ></img>
        <h4 className="result__name">{props.name}</h4>
        <p></p>
      </div>
    </Link>
  );
};

export default Result;
