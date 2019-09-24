import React from "react";
import EmptyState from "../Components/EmptyState";

const NoResult = () => {
  return (
    <div className="container">
      <main className="no-result">
        <EmptyState type="404" />
      </main>
    </div>
  );
};

export default NoResult;
