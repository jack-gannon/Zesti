import React from "react";
import Placeholder from "../img/placeholder.png";

const Features = () => {
  return (
    <div className="container">
      <h3 className="home__section-header">Features</h3>
      <section className="features">
        <div className="feature">
          <img className="feature__img" src={Placeholder} alt="placeholder" />
          <div className="feature__details">
            <h4 className="feature__header">Find Recipes</h4>
            <p className="feature__description">
              Use the search feature to find recipes based on recipe name,
              category, ingredients, and region.
            </p>
          </div>
        </div>
        <div className="feature">
          <img className="feature__img" src={Placeholder} alt="placeholder" />
          <div className="feature__details">
            <h4 className="feature__header">Save Recipes</h4>
            <p className="feature__description">
              Do you want to save a recipe for later? Click the
              &quote;Save&quote; button on a recipe to add it to your saved
              recipes.
            </p>
          </div>
        </div>
        <div className="feature">
          <img className="feature__img" src={Placeholder} alt="placeholder" />
          <div className="feature__details">
            <h4 className="feature__header">Shopping List</h4>
            <p className="feature__description">
              Make a shopping list with all of the ingredients you require for a
              dish. View them later by visiting the &quote;List&quote; page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
