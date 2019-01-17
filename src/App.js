import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

const secrets = require("./secrets.json");

const API_KEY = secrets.KEY;

class App extends Component {
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken%20breast&page=5&count=10`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
//We dont need constructor() function
//instead just state = {}
