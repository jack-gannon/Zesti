import React, { useEffect } from "react";

const AddItemButton = props => {
  return (
    <button
      onClick={
        props.isChecked
          ? () => {
              props.removeListItem(props.item);
              props.setChecked(false);
            }
          : () => props.addListItem(props.item)
      }
    >{`${props.isChecked}`}</button>
  );
};

export default AddItemButton;
