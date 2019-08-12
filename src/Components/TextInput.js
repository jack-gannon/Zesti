import React from "react";

const TextInput = props => {
  return (
    <div className={`text-input ${props.className}`}>
      <label htmlFor={props.id} value={props.label} className="label">
        {props.label}
      </label>
      <br />
      <input
        className="text-input__input"
        onChange={props.onChange}
        type="text"
        id={props.id}
      ></input>
    </div>
  );
};

export default TextInput;
