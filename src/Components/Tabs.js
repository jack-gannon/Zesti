import React from "react";

const Tabs = props => {
  return (
    <div className="tabs">
      {props.items.map((item, index) => {
        return (
          <button
            key={index}
            style={{ flexBasis: `${100 / props.items.length}%` }} // auto-config tab size
            onClick={() => props.action(item)}
            className={item === props.active ? "tab--active" : "tab--inactive"}
          >
            {item}
            <svg width="100%">
              <rect height=".25em"></rect>
            </svg>
          </button>
        );
      })}
    </div>
  );
  //Map through all items and assign action through props
};

export default Tabs;
