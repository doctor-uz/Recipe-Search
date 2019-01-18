import React from "react";

const Recipes = props => (
  <div
    key={props.recipe_id}
    className="container"
    style={{ marginBottom: "2rem" }}
  >
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div className="col-md-4">
            <div className="recipe__box">
              <img
                className="recipe__box-img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className="recipe__text">
                <h5 className="recipes__title">{recipe.title}</h5>
                <p className="recipes__subtitle" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
