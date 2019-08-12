import React from "react";
import Dropdown from "./Dropdown";

const DropdownWithLabel = props => {
  return (
    <div className="dropdown-with-label">
      <label className="label" htmlFor={props.id} id={`${props.id}-label`}>
        {props.label}
      </label>
      <Dropdown
        labelledBy={`${props.id}-label`}
        id={props.id}
        action={props.action}
        default={props.default}
        items={props.items}
        className={props.className}
      />
    </div>
  );
};

export default DropdownWithLabel;
