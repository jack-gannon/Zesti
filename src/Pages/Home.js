import React from "react";
import SearchPanel from "../Components/SearchPanel";
import Features from "../Components/Features";

const Home = props => {
  return (
    <>
      <div className="hero">
        <header>
          <h1 className="hero__header">Find Recipes with Zesti</h1>
          <h2 className="hero__subheader">
            Search hundreds of recipes & ingredients to find what you need.
          </h2>
        </header>
        <SearchPanel
          setResults={props.setResults}
          criteria={props.criteria}
          setCriteria={props.setCriteria}
          searchValue={props.searchValue}
          setSearchValue={props.setSearchValue}
          handleSearchRequest={props.handleSearchRequest}
          categories={props.categories}
          regions={props.regions}
          allIngredients={props.allIngredients}
          onChange={props.onChange}
          path="/"
        />
      </div>
      <Features />
    </>
  );
};

export default Home;
