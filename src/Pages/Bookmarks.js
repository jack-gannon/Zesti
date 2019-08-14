import React from "react";
import { Link } from "@reach/router";

const Bookmarks = props => {
  return (
    <div className="container">
      <main className="bookmarks">
        {props.bookmarks.map((item, index) => (
          <div key={index} className="bookmark">
            <Link to={`/recipe/${item.id}`}>
              <img src={item.img} alt={item.name} className="bookmark__img" />
              <p>{item.name}</p>
            </Link>
            <button onClick={() => props.removeBookmark(item.id)}>
              &times;
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Bookmarks;
