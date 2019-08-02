import React from "react";
import TextInput from "./TextInput";
import DropdownWithLabel from "./DropdownWithLabel";
import { Link } from "@reach/router";

const SearchInput = props => {
  return (
    <div className="search-input" id="search-input">
      {props.active === "Recipe" ? (
        <TextInput
          label="recipe-name"
          id="recipe-input"
          className={props.active === "Recipe" ? "fadeIn" : "fadeOut"}
          onChange={props.onChange}
        />
      ) : props.active === "Category" ? (
        <DropdownWithLabel
          label="Category"
          id="category-input"
          action={props.action}
          default="Select category..."
          items={props.categories}
          className={props.active === "Category" ? "fadeIn" : "fadeOut"}
        />
      ) : props.active === "Ingredient" ? (
        <TextInput
          label="ingredient-name"
          id="recipe-input"
          className={props.active === "Ingredient" ? "fadeIn" : "fadeOut"}
          onChange={props.onChange}
        />
      ) : props.active === "Region" ? (
        <DropdownWithLabel
          label="Region"
          id="region-input"
          action={props.action}
          default="Select region..."
          items={props.regions}
          className={props.active === "Region" ? "fadeIn" : "fadeOut"}
        />
      ) : (
        <></>
      )}
      <Link to="/results">
        <button
          onClick={props.handleSearchRequest}
          className="search-panel__btn"
        >
          Search
        </button>
      </Link>
    </div>
  );
};

export default SearchInput;
