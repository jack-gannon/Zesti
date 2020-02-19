import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import Placeholder from "../img/placeholder.png";

const ResultThumb = ({ image }) => {
  return (
    <div className="result__thumbnail-container">
      <LazyLoadImage
        alt={image.alt}
        src={image.src}
        className="result__thumbnail-img"
        effect="opacity"
        height="84px"
        width="100%"
        placeholderSrc={Placeholder}
      ></LazyLoadImage>
    </div>
  );
};

export default ResultThumb;
