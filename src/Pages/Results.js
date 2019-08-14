import React from "react";
import Result from "../Components/Result";
import ResultsPanel from "../Components/ResultsPanel";

const Results = props => {
  return (
    <>
      <ResultsPanel results={props.results} searchValue={props.searchValue} />
      <div className="container">
        <main className="search-results">
          {props.results.length >= 1 ? (
            props.results.map(item => (
              <Result
                name={item.strMeal}
                img={item.strMealThumb}
                id={item.idMeal}
                key={item.idMeal}
                bookmarks={props.bookmarks}
              />
            ))
          ) : (
            <p>No Results</p>
          )}
        </main>
      </div>
    </>
  );
};

export default Results;
