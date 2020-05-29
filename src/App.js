import React from "react";
import "./App.css";
import NASAData from "./components/NASAList";
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NASAData />
    </div>
  );
}

export default App;
