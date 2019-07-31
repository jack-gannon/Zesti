import React from "react";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";

const SearchInput = props => {
  return (
    <div className="search-input">
      {props.active === "Recipe" ? (
        <TextInput label="recipe-name" id="recipe-input" />
      ) : props.active === "Category" ? (
        <Dropdown
          label="select"
          id="category-input"
          action={props.action}
          default="Select category..."
          items={["category1", "category2"]}
        />
      ) : props.active === "Ingredient" ? (
        <TextInput label="ingredient-name" id="recipe-input" />
      ) : props.active === "Region" ? (
        <Dropdown
          label="region"
          id="region-input"
          action={props.action}
          default="Select region..."
          items={["region1", "region2"]}
        />
      ) : (
        <></>
      )}

      <button className="search-panel__btn">Search</button>
    </div>
  );
};

export default SearchInput;
