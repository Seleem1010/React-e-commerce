import React, { useContext } from "react";
import { CartItemsContext } from "../Contexts/CartItemsContext.jsx";

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
      });
    }
    return groups;
  }, []);

  console.log(groupedItems);

  return (
    <div>
      <h2>Cart Items:</h2>
      <ul>
        {groupedItems.map((item) => (
          <li key={item.name}>
            <div>Name: {item.name}</div>
            <div>Price: {item.price * item.quantity}</div>
            <div>Quantity: {item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}