import React from "react";
import { Link } from "@reach/router";
import EmptyState from "../Components/EmptyState";

const Bookmarks = props => {
  let bookmarkArray = Object.keys(props.bookmarks).map(i => props.bookmarks[i]);

  return (
    <div className="container">
      <main className="bookmarks">
        {bookmarkArray.length > 0 ? (
          bookmarkArray.map((item, index) => (
            <div key={index} className="bookmark">
              <Link to={`/recipe/${item.id}`} className="bookmark__contents">
                <img src={item.img} alt={item.name} className="bookmark__img" />
                <p className="bookmark__text">{item.name}</p>
              </Link>
              <button
                onClick={() => props.removeBookmark(item.id)}
                className="bookmark__remove-btn"
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <EmptyState type="saved" />
        )}
      </main>
    </div>
  );
};

export default Bookmarks;
