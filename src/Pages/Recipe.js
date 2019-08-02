import React, { useState, useEffect } from "react";
import SocialIcons from "../Components/SocialIcons";

const Recipe = props => {
  const [recipeData, setRecipeData] = useState("");
  const [isLoading, setLoadState] = useState(true);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`)
      .then(response => response.json())
      .then(data => setRecipeData(data.meals[0]))
      .then(() => setLoadState(false))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <img
            src={recipeData.strMealThumb}
            alt={recipeData.strMeal}
            className="recipe__img"
          />
          <h1 className="recipe__title">{recipeData.strMeal}</h1>
          <p className="recipe__info">
            {recipeData.strCategory} | {recipeData.strArea}
          </p>
          <SocialIcons />
        </div>
      )}
    </div>
  );
};

export default Recipe;
