import React from "react";

const AddItemButton = props => {
  return (
    <button
      className={`ingredient__add-item ${
        props.isAdded ? "add-item--active" : "add-item--inactive"
      }`}
      onClick={
        props.isAdded
          ? () => {
              props.removeListItem(props.item);
              props.setAdded(false);
            }
          : () => props.addListItem(props.item)
      }
    >
      {props.isAdded ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>{`Remove ${props.item.ingredient} from Shopping List`}</title>
          <circle r="7" cx="8" cy="8" />
          <line x1="12.01" y1="8" x2="3.99" y2="8" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>{`Add ${props.item.ingredient} to Shopping List`}</title>
          <circle r="7" cx="8" cy="8" />
          <line x1="8" y1="3.98" x2="8" y2="11.99" />
          <line x1="12.01" y1="8" x2="3.99" y2="8" />
        </svg>
      )}
    </button>
  );
};

export default AddItemButton;
