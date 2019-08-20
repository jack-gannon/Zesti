import React from "react";
import TextInput from "./TextInput";
import DSTextInput from "./DSTextInput";
import DSDropdown from "./DSDropdown";
import { Link } from "@reach/router";

const SearchInput = props => {
  return (
    <div className="search-input" id="search-input">
      <div className="search-input__input">
        {props.active === "Recipe" ? (
          <TextInput
            label="recipe-name"
            id="recipe-input"
            className={props.active === "Recipe" ? "fadeIn" : "fadeOut"}
            onChange={props.onChange}
          />
        ) : props.active === "Category" ? (
          <DSDropdown
            label="Category"
            id="category-input"
            action={props.action}
            default="Select category..."
            items={props.categories}
            className={props.active === "Category" ? "fadeIn" : "fadeOut"}
          />
        ) : props.active === "Ingredient" ? (
          <DSTextInput
            label="Ingredient"
            items={props.allIngredients}
            onChange={props.onChange}
            action={props.action}
            className={props.active === "Ingredient" ? "fadeIn" : "fadeOut"}
          />
        ) : props.active === "Region" ? (
          <DSDropdown
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
      </div>
      <Link
        to="/results"
        className="search-input__btn"
        onClick={props.handleSearchRequest}
      >
        Search
      </Link>
    </div>
  );
};

export default SearchInput;
