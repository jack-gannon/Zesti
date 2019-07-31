import React, { useState, useEffect } from "react";
import onClickOutside from "react-onclickoutside"; //Handles outside clicking to close menu

const Dropdown = props => {
  const [isOpen, toggleOpen] = useState(false);
  const [activeItem, setActive] = useState(props.default);
  useEffect(() => {
    setActive(props.default);
  }, [props.default]);
  Dropdown.handleClickOutside = () => {
    toggleOpen(false);
  };
  const handleSelection = item => {
    toggleOpen(false);
    setActive(item);
    props.action(item);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        id={props.id}
        onClick={() => toggleOpen(!isOpen)} //Toggle open/close
      >
        {activeItem}
      </button>

      <p className="dropdown-icon">{isOpen ? "^" : "V"}</p>
      {isOpen ? (
        <div className="dropdown-contents">
          <ul>
            {props.items.map((item, index) => {
              //Map array of props items (objects) to display dropdown items
              return (
                <li key={index} className="dropdown-item">
                  <button onClick={() => handleSelection(item)}>{item}</button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside
};

export default onClickOutside(Dropdown, clickOutsideConfig);
