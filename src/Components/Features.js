import React from "react";
import Placeholder from "../img/placeholder.png";

const Features = () => {
  return (
    <div className="container">
      <h3 className="home__section-header">
        <span>–</span>Features<span>–</span>
      </h3>
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
              Save a recipe for later by clicking the{" "}
              <span style={{ fontWeight: 600, color: "#222" }}>Save</span>{" "}
              button on a recipe. View saved recipes later by visiting the{" "}
              <span style={{ fontWeight: 600, color: "#222" }}>Saved</span>{" "}
              page.
            </p>
          </div>
        </div>
        <div className="feature">
          <img className="feature__img" src={Placeholder} alt="placeholder" />
          <div className="feature__details">
            <h4 className="feature__header">Shopping List</h4>
            <p className="feature__description">
              Make a shopping list with all of the ingredients you require for a
              dish. View them later by visiting the{" "}
              <span style={{ fontWeight: 600, color: "#222" }}>
                Shopping List
              </span>{" "}
              page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
