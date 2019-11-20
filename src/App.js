import React from "react";
import "./App.css";
import NASAData from "./components/NASAList";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div className="App">
      <NASAData />
      <NavBar />
    </div>
  );
}

export default App;
