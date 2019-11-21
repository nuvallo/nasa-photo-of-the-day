import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.url}></img>
      <h1>{props.title}</h1>
      <p className="date">{props.date}</p>
      <p className="explanation">{props.explanation}</p>
      <p className="copyright">Copyright: {props.copyright}</p>
    </div>
  );
}
