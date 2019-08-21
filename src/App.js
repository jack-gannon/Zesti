import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import Recipe from "./Pages/Recipe";
import NavBar from "./Components/NavBar";
import { Link, Router } from "@reach/router";
import Bookmarks from "./Pages/Bookmarks";

const App = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );
  const [allIngredients, setAllIngredients] = useState([]);
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
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list") //Get all ingredients from DB
      .then(response => response.json())
      .then(response =>
        setAllIngredients(
          response.meals.map(item => item.strIngredient.toLowerCase())
        )
      )
      .catch(error => console.log(error));
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?r=list");
    localStorage.setItem("bookmarks", JSON.stringify([...bookmarks]));
  }, [bookmarks]);

  const addBookmark = recipeObj => {
    setBookmarks([...bookmarks, recipeObj]);
    console.log(`${recipeObj} was added`);
  };

  const removeBookmark = recipeId => {
    setBookmarks([...bookmarks.filter(item => item.id !== recipeId)]);
  };

  const handleSearchRequest = () => {
    setLoading(true);
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
      .then(data =>
        data.meals ? setResults(data.meals.map(item => item)) : setResults([])
      )
      .then(() => setLoading(false))
      .catch(error => console.log(error));
  };

  const handleTextChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <NavBar setResults={setResults} bookmarks={bookmarks} />
      <Router>
        <Home
          setResults={setResults}
          criteria={criteria}
          setCriteria={setCriteria}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchRequest={handleSearchRequest}
          categories={categories}
          regions={regions}
          allIngredients={allIngredients}
          onChange={handleTextChange}
          path="/"
        />
        <Results
          isLoading={isLoading}
          results={results}
          path="/results"
          setResults={setResults}
          searchValue={searchValue}
          bookmarks={bookmarks}
        />
        <Recipe
          path="/recipe/:id"
          addBookmark={addBookmark}
          removeBookmark={removeBookmark}
          bookmarks={bookmarks}
        />
        <Bookmarks
          bookmarks={bookmarks}
          removeBookmark={removeBookmark}
          path="/bookmarks"
        />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
