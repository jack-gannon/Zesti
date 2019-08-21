import React from "react";
import Result from "../Components/Result";
import Loader from "../Components/Loader";
import ResultsPanel from "../Components/ResultsPanel";
import EmptyState from "../Components/EmptyState";

const Results = props => {
  return (
    <>
      {props.isLoading ? (
        <Loader />
      ) : props.results.length >= 1 ? (
        <>
          <ResultsPanel
            results={props.results}
            searchValue={props.searchValue}
          />
          <div className="container">
            <main className="search-results">
              {props.results.map(item => (
                <Result
                  name={item.strMeal}
                  img={item.strMealThumb}
                  id={item.idMeal}
                  key={item.idMeal}
                  bookmarks={props.bookmarks}
                />
              ))}
            </main>
          </div>
        </>
      ) : (
        <EmptyState type="search" />
      )}
    </>
  );
};

export default Results;
