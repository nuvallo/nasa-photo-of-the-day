import React from "react";
import "./App.css";
import NASAData from "./components/NASAList";
import NavBar from "./components/navBar/navBar";
import Card from "./components/Card/card";

function App() {
  return (
    <div className="App">
      <NASAData />
      <NavBar />
      <Card />
    </div>
  );
}

export default App;
