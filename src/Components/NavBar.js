import React, { useState } from "react";
import { Link } from "@reach/router";

const NavBar = props => {
  const [isOpen, toggleOpen] = useState(false);
  const handleToggle = () => {
    toggleOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <Link to="/" onClick={() => props.setResults([])}>
        Zesti!
      </Link>
      <div className="navbar__links--desktop">
        <ul>
          <li>
            <Link to="/bookmarks">
              <span className="navbar__menu-link">
                <svg viewBox="0 0 32 32">
                  <polygon points="7.5,4.5 24.5,4.5 24.5,27.5 16,20 7.5,27.5 " />
                </svg>
                <p>Saved</p>
                <p className="link__item-count">{props.bookmarks.length}</p>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/shoppinglist">
              <span className="navbar__menu-link">
                <svg viewBox="0 0 32 32">
                  <polygon points="7.5,4.5 24.5,4.5 24.5,27.5 16,20 7.5,27.5 " />
                </svg>
                <p>Shopping List</p>
                <p className="link__item-count">{props.listItems.length}</p>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__links--mobile">
        <button
          className="navbar__menu-toggle"
          aria-label="Open the Menu"
          onClick={handleToggle}
        >
          {isOpen ? (
            <span>&times;</span>
          ) : (
            <svg viewBox="0 0 32 32">
              <line x1="6" y1="9" x2="26" y2="9" />
              <line x1="6" y1="16" x2="26" y2="16" />
              <line x1="6" y1="23" x2="26" y2="23" />
            </svg>
          )}
        </button>
        <div className={`navbar__menu-links${isOpen ? "--show" : "--hide"}`}>
          <ul>
            <li>
              <Link to="/bookmarks" onClick={handleToggle}>
                <span className="navbar__menu-link">
                  <svg viewBox="0 0 32 32">
                    <polygon points="7.5,4.5 24.5,4.5 24.5,27.5 16,20 7.5,27.5 " />
                  </svg>
                  <p>Saved</p>
                  <p className="link__item-count">{props.bookmarks.length}</p>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/shoppinglist" onClick={handleToggle}>
                <span className="navbar__menu-link">
                  <svg viewBox="0 0 32 32">
                    <polygon points="7.5,4.5 24.5,4.5 24.5,27.5 16,20 7.5,27.5 " />
                  </svg>
                  <p>Shopping List</p>
                  <p className="link__item-count">{props.listItems.length}</p>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
