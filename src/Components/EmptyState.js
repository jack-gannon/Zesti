import React from "react";
import EmptySaved from "../img/empty_saved.svg";
import EmptySearch from "../img/empty_search.svg";

const EmptyState = props => {
  return (
    <div className="empty-state fadeIn">
      {props.type === "saved" ? (
        <>
          {/* Empty Saved State */}
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
        <>
          {/* Empty Search State */}
          <img
            src={EmptySearch}
            alt="No search results"
            className="empty-state__img"
          />
          <h1 className="empty-state__main-text">No Search Results</h1>
          <p className="empty-state__sub-text">
            We were unable to find what you were looking for. Try searching
            again using a category, or a different search phrase.
          </p>
        </>
      )}
    </div>
  );
};

export default EmptyState;
