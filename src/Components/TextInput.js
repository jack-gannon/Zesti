import React from "react";

const TextInput = props => {
  return (
    <div className={`text-input-wlabel ${props.className}`}>
      <label htmlFor={props.id} value={props.label} className="label">
        {props.label}
      </label>
      <br />
      <div className="text-input__input">
        <input onChange={props.onChange} type="text" id={props.id}></input>
      </div>
    </div>
  );
};

export default TextInput;
