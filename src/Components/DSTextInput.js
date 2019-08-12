import React from "react";
import Downshift from "downshift";

class DSTextInput extends React.Component {
  render() {
    return (
      <Downshift onChange={selection => this.props.action(selection)}>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue
        }) => (
          <div className={`text-input--autocomplete ${this.props.className}`}>
            <label {...getLabelProps({})} className="label">
              {this.props.label}
            </label>
            <br />
            <input {...getInputProps()} className="text-input__input" />
            <ul
              {...getMenuProps()}
              className={`autocomplete-items${isOpen ? "--open" : "--closed"}`} //Change class modifier based on open state
            >
              {isOpen
                ? this.props.items
                    .filter(item => !inputValue || item.includes(inputValue))
                    .map((item, index) => (
                      /* eslint-disable */
                      <li
                        className="autocomplete-items__item"
                        {...getItemProps({
                          key: index,
                          index,
                          item
                        })}
                      >
                        {item}
                      </li>
                      /* eslint-enable */
                    ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    );
  }
}
export default DSTextInput;
