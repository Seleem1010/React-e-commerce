import React, { useContext } from "react";
import { CartItemsContext } from "../Contexts/CartItemsContext.jsx";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Cart.css"; // import custom CSS styles

export default function Cart() {
  const { cartItems } = useContext(CartItemsContext);

  // group items by name and calculate total price and quantity for each group
  const groupedItems = cartItems.reduce((groups, item) => {
    const group = groups.find((g) => g.name === item.name);
    if (group) {
      group.quantity += 1;
      group.price += item.price;
    } else {
      groups.push({
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image, // add image to the group object
      });
    }
    return groups;
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "red" }}>Cart</h2>
      <div className="card-group">
        {groupedItems.map((item, index) => (
          <Card key={item.name} className="card-item">
            <div className="card-image">
              <Card.Img variant="top" src={item.image} />
            </div>
            <div className="card-details">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Price: {item.price} <br />
                Quantity: {item.quantity}
              </Card.Text>
              <div className="card-buttons">
                <Button variant="primary" disabled>
                  +
                </Button>{" "}
                <Button variant="danger" disabled>
                  -
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}