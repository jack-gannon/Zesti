import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = props => {
  return (
    <div className="ingredients">
      <h3 className="instruction__header">Ingredients</h3>
      <ul className="ingredients-list">
        {props.ingredients.map((item, index) => (
          <Ingredient
            item={item}
            index={index}
            key={index}
            listItems={props.listItems}
            addListItem={props.addListItem}
            removeListItem={props.removeListItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
