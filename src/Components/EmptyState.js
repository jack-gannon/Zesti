import React from "react";
import EmptySaved from "../img/empty_saved.svg";

const EmptyState = props => {
  return (
    <div className="empty-state fadeIn">
      {props.type === "saved" ? (
        <>
          <img
            src={EmptySaved}
            alt="No saved recipes"
            className="empty-state__img"
          />
          <h1 className="empty-state__main-text">No Saved Recipes</h1>
          <p className="empty-state__sub-text">
            To save a recipe, click on the <b>Save</b> button on a recipe page
          </p>
        </>
      ) : (
        <p>Search</p>
      )}
    </div>
  );
};

export default EmptyState;
