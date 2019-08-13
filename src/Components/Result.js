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
        <button className="result__bookmark">
          <svg>
            <polygon points="7.5,4.5 24.5,4.5 24.5,27.5 16,20 7.5,27.5 " />
          </svg>
        </button>
      </div>
    </Link>
  );
};

export default Result;
