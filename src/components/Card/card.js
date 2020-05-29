import React from "react";
import "./card.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function CardComponent({ card }) {
  return (
    <div className="card">
      <Card>
        <CardImg top width="100%" src={card.url} alt="NASA Image" />
        <CardBody>
          <CardTitle>{card.title}</CardTitle>
          <CardSubtitle>{card.date}</CardSubtitle>
          <CardText>{card.explanation}</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
    </div>
  );
}
