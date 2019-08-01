import React from "react";
import Dropdown from "./Dropdown";

const DropdownWithLabel = props => {
  return (
    <div className="dropdown-with-label">
      <label className="label" htmlFor={props.id}>
        {props.label}
      </label>
      <Dropdown
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
