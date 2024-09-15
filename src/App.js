import React from "react";
import "./App.css";
import FoodSelection from "./components/FoodSelection";
import Titlee from "./components/Titlee";

function App() {
  return (
    <div className="App">
      <div className="Titlee">
        <Titlee />
      </div>
      <div className="FoodSelection">
        <FoodSelection />
      </div>
    </div>
  );
}

export default App;
