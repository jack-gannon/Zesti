import React from "react";
import { Link } from "@reach/router";
import ResultThumb from "./ResultThumb";
import PlaceholderImg from "./PlaceholderImg";

const Result = props => {
  return (
    <Link to={`/recipe/${props.id}`}>
      <div className="search-result">
        <ResultThumb
          image={{
            alt: props.name,
            src: props.img,
            placeholder: PlaceholderImg
          }}
        />
        <h4 className="result__name">{props.name}</h4>
        <p></p>
      </div>
    </Link>
  );
};

export default Result;
