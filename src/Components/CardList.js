import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CardList = ({ el }) => {
  console.log("element", el);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>{el.info}</Card.Text>
          <Button variant="primary">{el.price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardList;
