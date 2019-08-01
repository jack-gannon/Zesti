import React from "react";
import Tabs from "./Tabs";
import SearchInput from "./SearchInput";

const SearchPanel = props => {
  const handleTabSelect = item => {
    props.setCriteria(item);
    props.setSearchValue("");
  };
  return (
    <div className="search-panel">
      <Tabs
        items={["Recipe", "Category", "Ingredient", "Region"]}
        action={handleTabSelect}
        active={props.criteria}
      />

      <SearchInput
        active={props.criteria}
        action={props.setSearchValue}
        handleSearchRequest={props.handleSearchRequest}
        categories={props.categories}
        regions={props.regions}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchPanel;
