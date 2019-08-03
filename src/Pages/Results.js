import React from "react";
import Result from "../Components/Result";

const Results = props => {
  return (
    <div className="search-results">
      {props.results ? (
        props.results.map(item => (
          <Result
            name={item.strMeal}
            img={item.strMealThumb}
            id={item.idMeal}
            key={item.idMeal}
          />
        ))
      ) : (
        <p>No Results</p>
      )}
    </div>
  );
};

export default Results;
