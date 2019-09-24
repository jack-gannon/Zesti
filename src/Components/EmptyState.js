import React from "react";
import EmptySaved from "../img/empty_saved.svg";
import EmptySearch from "../img/empty_search.svg";
import NoResultsImg from "../img/404.svg";
import EmptyList from "../img/empty_list.svg";
import { Link } from "@reach/router";

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
      ) : props.type === "list" ? (
        <>
          {/* Empty Shopping List State */}
          <img
            src={EmptyList}
            alt="No search results"
            className="empty-state__img"
          />
          <h1 className="empty-state__main-text">No Saved Ingredients</h1>
          <p className="empty-state__sub-text">
            Your shopping list is empty. To add items to your shopping list, add
            ingredients from a recipe page.
          </p>
        </>
      ) : props.type === "404" ? (
        <>
          {/* 404 State */}
          <img
            src={NoResultsImg}
            alt="404 not found"
            className="empty-state__img"
          />
          <h1 className="empty-state__main-text">404 - Page Not Found</h1>
          <p className="empty-state__sub-text">
            We are sorry, the page you are looking for does not exist. Please
            try again.
          </p>
          <Link to="/" className="empty-state__back-btn">
            Back to Home
          </Link>
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
          <Link to="/" className="empty-state__back-btn">
            Back to Search
          </Link>
        </>
      )}
    </div>
  );
};

export default EmptyState;
