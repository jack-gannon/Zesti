import React from "react";

const AddItemButton = props => {
  return (
    <button
      className={`ingredient__add-item ${
        props.isChecked ? "add-item--active" : "add-item--inactive"
      }`}
      onClick={
        props.isChecked
          ? () => {
              props.removeListItem(props.item);
              props.setChecked(false);
            }
          : () => props.addListItem(props.item)
      }
    >
      {props.isChecked ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>Add Item From List</title>
          <circle r="7" cx="8" cy="8" />
          <line x1="12.01" y1="8" x2="3.99" y2="8" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>Remove Item From List</title>
          <circle r="7" cx="8" cy="8" />
          <line x1="8" y1="3.98" x2="8" y2="11.99" />
          <line x1="12.01" y1="8" x2="3.99" y2="8" />
        </svg>
      )}
    </button>
  );
};

export default AddItemButton;
