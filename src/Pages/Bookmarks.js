import React from "react";

const Bookmarks = props => {
  return (
    <div>
      {props.bookmarks.map((item, index) => (
        <div key={index}>
          <img style={{ width: "56px" }} src={item.img} alt={item.name} />
          <p>{item.name}</p>
          <button onClick={() => props.removeBookmark(item.id)}>&times;</button>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;
