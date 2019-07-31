import React from "react";
import ReactDOM from "react-dom";
import SearchPanel from "./Components/SearchPanel";

const App = () => {
  return (
    <div>
      Zesti!
      <SearchPanel />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
