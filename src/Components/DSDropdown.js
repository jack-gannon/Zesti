import React from "react";
import Downshift from "downshift";

class DSDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(selection) {
    this.setState({ selectedItem: selection });
    this.props.action(selection);
  }

  render() {
    return (
      <div className={`dropdown-input ${this.props.className}`}>
        <Downshift onChange={this.onChange}>
          {({ isOpen, getToggleButtonProps, getItemProps, getLabelProps }) => (
            <div>
              <label {...getLabelProps()} className="label">
                {this.props.label}
              </label>
              <br />
              <button
                {...getToggleButtonProps()}
                className="dropdown-input__input"
              >
                {this.state.selectedItem === ""
                  ? this.props.default
                  : this.state.selectedItem}
              </button>
              <svg className="dropdown-input__icon" viewBox="0 0 15 15">
                {isOpen ? (
                  <polyline points="14.5,11 8,4.5 1.5,11 " />
                ) : (
                  <polyline points="1.5,4.5 8,11 14.5,4.5 " />
                )}
              </svg>
              <div className="dropdown-input__contents">
                {isOpen
                  ? this.props.items.map((item, index) => (
                      /* eslint-disable */
                      <div
                        className="dropdown-input__item"
                        {...getItemProps({ key: index, index, item })}
                      >
                        {item}
                      </div>
                    ))
                  : null
                /* eslint-enable */
                }
              </div>
            </div>
          )}
        </Downshift>
      </div>
    );
  }
}

export default DSDropdown;
