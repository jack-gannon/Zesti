import React from "react";

const SearchPanelTabs = props => {
  return (
    <div className="search-panel__tabs">
      <button className="tabs__tab" onClick={() => props.setCriteria("recipe")}>
        Recipe
      </button>
      <button
        className="tabs__tab"
        onClick={() => props.setCriteria("category")}
      >
        Category
      </button>
      <button
        className="tabs__tab"
        onClick={() => props.setCriteria("ingredient")}
      >
        Ingredient
      </button>
      <button className="tabs__tab" onClick={() => props.setCriteria("region")}>
        Region
      </button>
    </div>
  );
};

export default SearchPanelTabs;
