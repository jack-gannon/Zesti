import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

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
      ></LazyLoadImage>
    </div>
  );
};

export default ResultThumb;
