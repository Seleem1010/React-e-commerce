import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

export default function Cart() {
  const { cartItems } = useSelector((state)=>state.CartSlice);

  // group items by name and calculate total price and quantity for each group
  const [groupedItems, setGroupedItems] = useState(
    cartItems.reduce((groups, item) => {
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
    }, [])
  );

  // increment quantity and price of a group
  const incrementGroup = (index) => {
    const newGroups = [...groupedItems];
    newGroups[index].quantity += 1;
    newGroups[index].price += newGroups[index].price / (newGroups[index].quantity - 1);
    setGroupedItems(newGroups);
  };

  // decrement quantity and price of a group or remove group if quantity reaches 0
  const decrementGroup = (index) => {
    const newGroups = [...groupedItems];
    if (newGroups[index].quantity === 1) {
      // enable - button when quantity is 1
      newGroups[index].quantity -= 1;
      newGroups[index].price -= newGroups[index].price;
      setGroupedItems(newGroups.filter((item) => item.quantity !== 0)); // remove group from array if quantity reaches 0
    } else {
      // decrement quantity and price if quantity is greater than 1
      newGroups[index].quantity -= 1;
      newGroups[index].price -= newGroups[index].price / (newGroups[index].quantity + 1);
      setGroupedItems(newGroups);
    }
  };



  return (
    <div className="container">
      <h2 style={{ textAlign: "center", color: "red" }}>Cart</h2>
      <div className="row">
        {groupedItems.map((item, index) => (
          <div key={item.name} className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top"
                src={item.image}
                style={{ height: '200px', width: '100%', objectFit: 'contain' }}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title" style={{ height: '48px', overflow: 'hidden' }}>
                  {item.name}
                </h5>
                <div className="d-flex my-2 justify-content-between">
                  <label className="price-label">Price : {item.price.toFixed(2)}</label>
                  <label className="quantity-label">Quantity : {item.quantity}</label>
                </div>
                <div className="d-flex justify-content-between">
                  
                  <button className="btn btn-primary" onClick={() => incrementGroup(index)}>+</button>
                  <button className="btn btn-danger" onClick={() => decrementGroup(index)} disabled={item.quantity <= 0}>-</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}