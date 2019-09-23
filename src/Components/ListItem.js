import React, { useState } from "react";

const ListItem = props => {
  const [isChecked, setChecked] = useState(false);
  return (
    <li
      className={`list__item ${
        isChecked ? "item--checked" : "item--unchecked"
      }`}
    >
      <div>
        <button
          className={`item__toggle-check ${
            isChecked ? "toggle--checked" : "toggle--unchecked"
          }`}
          onClick={() => setChecked(!isChecked)}
        >
          {isChecked ? (
            <svg viewBox="0 0 16 16">
              <polyline points="14.6,3 7.1,10.5 3.9,7.3" />
            </svg>
          ) : (
            " "
          )}
        </button>
        {props.item.ingredient} - {props.item.unit}
      </div>
      <button
        className="item__remove-btn"
        onClick={() => props.removeListItem(props.item)}
      >
        &times;
      </button>
    </li>
  );
};

export default ListItem;
