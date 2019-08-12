import React from "react";

const ResultsPanel = props => {
  return (
    <header className="results-panel">
      <div className="container">
        <p className="results-panel__count">
          <span>{props.results.length}</span> Results for:
        </p>
        <p className="results-panel__value">{` "${props.searchValue}"`}</p>
      </div>
    </header>
  );
};

export default ResultsPanel;
