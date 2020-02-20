import React from "react";
import EmptyState from "../Components/EmptyState";
import ListItem from "../Components/ListItem";

const ShoppingList = props => {
  let shoppingListArray = Object.keys(props.listItems).map(
    i => props.listItems[i]
  );
  return (
    <div className="container">
      <main className="shopping-list">
        {shoppingListArray.length > 0 ? (
          <ul className="shopping-list__list">
            {shoppingListArray.map((item, index) => (
              <ListItem
                key={item.ingredient + item.unit}
                index={index}
                item={item}
                isChecked={item.isChecked}
                listItems={props.listItems}
                removeListItem={props.removeListItem}
                checkListItem={props.checkListItem}
              />
            ))}
          </ul>
        ) : (
          <EmptyState type="list" />
        )}
      </main>
    </div>
  );
};

export default ShoppingList;
