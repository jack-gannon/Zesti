import React from "react";
import EmptyState from "../Components/EmptyState";

const ShoppingList = props => {
  return (
    <div className="container">
      <ul className="shopping-list">
        {props.listItems.length > 0 ? (
          <ul>
            {props.listItems.map((item, index) => (
              <li key={index}>
                {index} - {item.ingredient} - {item.unit}
                <button onClick={() => props.removeListItem(item)}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState type="bookmarks" />
        )}
      </ul>
    </div>
  );
};

export default ShoppingList;
