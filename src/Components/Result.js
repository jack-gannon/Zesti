import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import ResultThumb from "./ResultThumb";
import PlaceholderImg from "./PlaceholderImg";

const Result = props => {
  const [isBookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    props.bookmarks.length > 0
      ? props.bookmarks.map(bookmark =>
          bookmark.id === props.id ? setBookmarked(true) : null
        )
      : null;
  }, [props.bookmarks, props.id]);
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
        {isBookmarked ? (
          <svg viewBox="0 0 32 32" className="result__bookmark">
            <polygon points="7.5,4.5 24.5,4.5 24.5,27.5 16,20 7.5,27.5 " />
          </svg>
        ) : null}
      </div>
    </Link>
  );
};

export default Result;
