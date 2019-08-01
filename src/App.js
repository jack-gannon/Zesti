import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SearchPanel from "./Components/SearchPanel";
import Results from "./Pages/Results";

const App = () => {
  const [results, setResults] = useState(false);
  const [criteria, setCriteria] = useState("Recipe");
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [regions, setRegion] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php") //Get categories from DB
      .then(response => response.json())
      .then(response =>
        setCategories(response.categories.map(item => item.strCategory))
      )
      .catch(error => console.log(error));
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list") //Get regions from DB
      .then(response => response.json())
      .then(response => setRegion(response.meals.map(item => item.strArea)))
      .catch(error => console.log(error));
  }, []);

  const handleSearchRequest = () => {
    let query = "";
    if (criteria === "Recipe") {
      query = "search.php?s=";
    } else if (criteria === "Category") {
      query = "filter.php?c=";
    } else if (criteria === "Ingredient") {
      query = "filter.php?i=";
    } else {
      query = "filter.php?a=";
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/${query}${searchValue}`)
      .then(response => response.json())
      .then(data => setResults(data.meals.map(item => item)))
      .catch(error => console.log(error));
  };

  const handleTextChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      Zesti!
      <SearchPanel
        setResults={setResults}
        criteria={criteria}
        setCriteria={setCriteria}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchRequest={handleSearchRequest}
        categories={categories}
        regions={regions}
        onChange={handleTextChange}
      />
      <Results results={results} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
