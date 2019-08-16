import React from "react";

const ControlPanel = props => {
  return (
    <div className="recipe-header__control-panel">
      <button
        id="control-panel__bookmark-btn"
        className="control-panel__btn"
        onClick={props.isBookmarked ? props.removeBookmark : props.addBookmark}
      >
        <svg
          viewBox="0 0 32 32"
          id="control-panel__bookmark-icon"
          className={`control-panel__bookmark-icon${
            props.isBookmarked ? "--active" : "--inactive"
          }`}
        >
          <polygon points="7.5,4.5 24.5,4.5 24.5,27.5 16,20 7.5,27.5 " />
        </svg>
        {props.isBookmarked ? "Saved" : "Save"}
      </button>
      <button id="control-panel__yt-btn" className="control-panel__btn">
        <svg viewBox="0 0 32 32" id="control-panel__yt-icon">
          <g>
            <circle cx="16" cy="16" r="15" />
          </g>
          <polygon points="11.5,21 11.5,8.9 22.5,16 11.5,23.1 " />
        </svg>
        Watch
      </button>
      <button id="control-panel__share-btn" className="control-panel__btn">
        <svg viewBox="0 0 32 32" id="control-panel__share-icon">
          <circle cx="20.5" cy="8.5" r="3" />
          <circle cx="20.5" cy="24.5" r="3" />
          <circle cx="8.5" cy="16.5" r="3" />
          <line x1="18" y1="22.9" x2="10.9" y2="18.3" />
          <line x1="18" y1="10.3" x2="10.9" y2="14.9" />
        </svg>
        Share
      </button>
    </div>
  );
};

export default ControlPanel;
