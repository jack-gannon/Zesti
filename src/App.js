import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import Recipe from "./Pages/Recipe";
import NavBar from "./Components/NavBar";
import { Router } from "@reach/router";
import Bookmarks from "./Pages/Bookmarks";
import ShoppingList from "./Pages/ShoppingList";

const App = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );
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
    localStorage.setItem("shoppingList", JSON.stringify([...listItems]));
  }, [bookmarks, listItems]);

  const addListItem = itemObj => {
    //Adds an item to the shopping list
    setListItems([...listItems, itemObj]);
    console.log(
      `${itemObj.ingredient} - ${itemObj.unit} - ${itemObj.isChecked} was added`
    );
  };

  const removeListItem = itemObj => {
    //Removes an item from the shopping list
    setListItems([
      ...listItems.filter(listItem => {
        if (
          listItem.ingredient === itemObj.ingredient &&
          listItem.unit === itemObj.unit
        ) {
          return false;
        }
        return true;
      })
    ]);
    console.log(`${itemObj.ingredient} - ${itemObj.unit} was removed`);
  };

  const checkListItem = itemObj => {
    //Toggles shopping checklist item
    setListItems(
      listItems.map(item => {
        if (item === itemObj) {
          return {
            ...item,
            isChecked: !itemObj.isChecked
          };
        } else {
          return item;
        }
      })
    );
    console.log(listItems);
  };

  const addBookmark = recipeObj => {
    setBookmarks([...bookmarks, recipeObj]);
    console.log(`${recipeObj} was added`);
  };

  const removeBookmark = recipeId => {
    setBookmarks([...bookmarks.filter(item => item.id !== recipeId)]);
  };

  //Facilitates search request based on criteria + search input value:
  const handleSearchRequest = () => {
    setLoading(true); //Reset Load state
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

  //Sets search value to text input:
  const handleTextChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <NavBar
        setResults={setResults}
        bookmarks={bookmarks}
        listItems={listItems}
      />
      <Router>
        <Home
          path="/"
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
        />
        <Results
          path="/results"
          isLoading={isLoading}
          results={results}
          setResults={setResults}
          searchValue={searchValue}
          bookmarks={bookmarks}
        />
        <Recipe
          path="/recipe/:id"
          addBookmark={addBookmark}
          addListItem={addListItem}
          removeBookmark={removeBookmark}
          removeListItem={removeListItem}
          bookmarks={bookmarks}
          listItems={listItems}
        />
        <Bookmarks
          path="/bookmarks"
          bookmarks={bookmarks}
          removeBookmark={removeBookmark}
        />
        <ShoppingList
          path="/shoppinglist"
          listItems={listItems}
          removeListItem={removeListItem}
          checkListItem={checkListItem}
        />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
