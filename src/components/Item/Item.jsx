import { Button, Card } from "react-bootstrap";
import "./Item.css";
import { memo } from "react";
import { Link } from "react-router-dom";

const Item = memo(({ producto }) => {
  return (
    <div className="cardProd">
      <Card style={{ width: "18rem" }} className={producto.id}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Link to={`/detail/${producto.id}`}>
            <Button variant="primary" className="detalles">
              Ver detalles
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
});

console.log(Item)

export default Item;
