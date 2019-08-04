import React from "react";
import { Link } from "@reach/router";
import ResultThumb from "./ResultThumb";

const Result = props => {
  return (
    <Link to={`/recipe/${props.id}`}>
      <div className="search-result">
        <ResultThumb
          image={{
            alt: props.name,
            src: props.img,
            placeholderSrc: "../img/placeholder.png"
          }}
        />
        <h4 className="result__name">{props.name}</h4>
        <p></p>
      </div>
    </Link>
  );
};

export default Result;
