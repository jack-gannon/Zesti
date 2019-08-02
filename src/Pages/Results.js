import React from "react";
import Result from "../Components/Result";

const Results = props => {
  return (
    <div className="search-results">
      {props.results ? (
        props.results.map((item, index) => (
          <Result
            name={item.strMeal}
            img={item.strMealThumb}
            id={item.idMeal}
            key={index}
          />
        ))
      ) : (
        <p>No Results</p>
      )}
    </div>
  );
};

export default Results;
