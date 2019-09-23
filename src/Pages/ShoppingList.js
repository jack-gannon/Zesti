import React from "react";
import EmptyState from "../Components/EmptyState";
import ListItem from "../Components/ListItem";

const ShoppingList = props => {
  return (
    <div className="container">
      {props.listItems.length > 0 ? (
        <ul className="shopping-list__list">
          {props.listItems.map((item, index) => (
            <ListItem
              key={item.ingredient + item.unit}
              index={index}
              item={item}
              removeListItem={props.removeListItem}
            />
          ))}
        </ul>
      ) : (
        <EmptyState type="bookmarks" />
      )}
    </div>
  );
};

export default ShoppingList;
