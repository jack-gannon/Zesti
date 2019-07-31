import React, { useState } from "react";
import Tabs from "./Tabs";
import SearchInput from "./SearchInput";

const SearchPanel = () => {
  const [criteria, setCriteria] = useState("Recipe");
  const [searchValue, setSearchValue] = useState("search value");

  return (
    <div className="search-panel">
      <Tabs
        items={["Recipe", "Category", "Ingredient", "Region"]}
        action={setCriteria}
        active={criteria}
      />
      <h1>{searchValue}</h1> | <h2>{criteria}</h2>
      <SearchInput active={criteria} action={setSearchValue} />
    </div>
  );
};

export default SearchPanel;
