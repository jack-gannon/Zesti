import React, { useState, useEffect } from "react";
import AddItemButton from "./AddItemButton";

const Ingredient = props => {
  const [isChecked, setChecked] = useState(false);
  useEffect(() => {
    props.listItems.map(listItem =>
      listItem.ingredient === props.item.ingredient ? setChecked(true) : null
    );
  }, [props.listItems, props.item]);
  return (
    <li key={props.index} className="ingredient">
      <AddItemButton
        isChecked={isChecked}
        setChecked={setChecked}
        item={props.item}
        listItems={props.listItems}
        addListItem={props.addListItem}
        removeListItem={props.removeListItem}
      />
      <span className="ingredient__unit">{props.item.unit}</span>
      {" - "}
      <span className="ingredient__ingredient">{props.item.ingredient}</span>
    </li>
  );
};

export default Ingredient;
