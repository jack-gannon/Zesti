import React from "react";
import { Link } from "@reach/router";

const ResultsPanel = props => {
  return (
    <header className="results-panel">
      <div className="container">
        <Link to="/" className="results-panel__back-btn">
          {"◂ Back"}
        </Link>
        <div className="results-panel__contents ">
          <p className="results-panel__count">
            <span>{props.results.length}</span> Results for:
          </p>
          <p className="results-panel__value">{` "${props.searchValue}"`}</p>
        </div>
      </div>
    </header>
  );
};

export default ResultsPanel;
