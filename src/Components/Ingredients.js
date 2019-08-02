import React from "react";

const Ingredients = props => {
  return (
    <div className="ingredients">
      <h3 className="instruction__header">Ingredients</h3>
      <ul className="ingredients-list">
        {props.ingredients.map((item, index) => (
          <li key={index} className="ingredient">
            <span className="ingredient__unit">{item.unit}</span>
            {" - "}
            <span className="ingredient__ingredient">{item.ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
