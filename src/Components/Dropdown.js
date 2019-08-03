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
    <div className={`dropdown ${props.className}`}>
      <button
        className="dropdown-toggle"
        id={props.id}
        onClick={() => toggleOpen(!isOpen)} //Toggle open/close
      >
        {activeItem}
      </button>

      <svg className="dropdown-icon" viewBox="0 0 15 15">
        {isOpen ? (
          <polyline points="14.5,11 8,4.5 1.5,11 " />
        ) : (
          <polyline points="1.5,4.5 8,11 14.5,4.5 " />
        )}
      </svg>
      {isOpen ? (
        <div className="dropdown-contents">
          <ul>
            {props.items.length > 0
              ? props.items.map((item, index) => {
                  //Map array of props items (objects) to display dropdown items
                  return (
                    <li key={index} className="dropdown-item">
                      <button onClick={() => handleSelection(item)}>
                        {item}
                      </button>
                    </li>
                  );
                })
              : "no"}
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
