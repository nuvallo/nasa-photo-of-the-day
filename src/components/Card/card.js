import React from "react";
import "./card.css";

export default function Card({ data }) {
  return (
    <div className="card">
      <img src=""></img>
      <h1>{data}</h1>
      <p className="date">8-12-2012</p>
      <p className="explanation">paragragh</p>
    </div>
  );
}
