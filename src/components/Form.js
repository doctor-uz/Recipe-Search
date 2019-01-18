import React from "react";

const Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
    <input type="text" name="recipeName" />
    <button>Search</button>
  </form>
);

export default Form;
