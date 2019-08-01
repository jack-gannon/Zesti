import React from "react";
import Result from "../Components/Result";

const Results = props => {
  return (
    <div className="search-results">
      {props.results ? (
        props.results.map((item, index) => (
          <Result name={item.strMeal} key={index} img={item.strMealThumb} />
        ))
      ) : (
        <p>No Results</p>
      )}
    </div>
  );
};

export default Results;
