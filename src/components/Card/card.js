import React from "react";
import "./card.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CardComponent(props) {
  return (
    <div className="card">
      <Card>
        <CardImg top width="100%" src={props.url} alt="NASA Image" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
    </div>
  );
}
