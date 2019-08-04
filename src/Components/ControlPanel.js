import React from "react";

const ControlPanel = () => {
  return (
    <div className="recipe-header__control-panel">
      <button id="control-panel__yt-btn" className="control-panel__btn">
        <svg viewBox="0 0 32 32">
          <g>
            <circle cx="16" cy="16" r="15" />
          </g>
          <polygon points="11.5,21 11.5,8.9 22.5,16 11.5,23.1 " />
        </svg>
      </button>
      <button id="control-panel__share-btn" className="control-panel__btn">
        <svg viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="15" />
          <circle cx="20.5" cy="8.5" r="3" />
          <circle cx="20.5" cy="24.5" r="3" />
          <circle cx="8.5" cy="16.5" r="3" />
          <line x1="18" y1="22.9" x2="10.9" y2="18.3" />
          <line x1="18" y1="10.3" x2="10.9" y2="14.9" />
        </svg>
      </button>
    </div>
  );
};

export default ControlPanel;
