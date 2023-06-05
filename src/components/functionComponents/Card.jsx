import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegGrinTongueSquint, FaShoppingCart } from 'react-icons/fa';
import { CartItemsContext } from '../../Contexts/CartItemsContext.jsx';
import { useNavigate } from 'react-router';


function BasicExample({ product }) {
  const { mycounter, setMycounter, cartItems, setCartItems } = useContext(CartItemsContext);
  const { image, title, description, price, id } = product;
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const newItem = {
    name: title,
    image: image,
    price: price,
  };

  const add = () => {
    setQuantity(quantity + 1);
    setMycounter(mycounter + 1);
    setCartItems([...cartItems, newItem]); 
  };

  const remove = () => {
    // Decrease the quantity by 1 and update the mycounter state
    setQuantity(quantity - 1);
    setMycounter(mycounter - 1);
  
    // Find the index of the first item in cartItems with the same name as the current product
    const index = cartItems.findIndex(item => item.name === title);
  
    // If an item was found with the same name
    if (index !== -1) {
      // Create a new array newCartItems by copying cartItems using the spread operator
      const newCartItems = [...cartItems];
      // Remove the item at the found index using the splice method
      newCartItems.splice(index, 1);
      // Update the cartItems state with the new array using setCartItems
      setCartItems(newCartItems);
    }
  };

  useEffect(() => {
    console.log(cartItems); 
  }, [cartItems]);

  useEffect(() => {
    console.log('updated');
  }, [quantity]);

  return (
    <div className="col-12 col-md-6 col-lg-3 g-3">
      <Card>
        <div className="text-center text-danger p-2">
          <FaShoppingCart /> : {mycounter}
        </div>

        <Card.Img
          variant="top"
          src={image}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title style={{ height: '48px', overflow: 'hidden' }}>
            {title}
          </Card.Title>
          <Card.Text style={{ height: '168px', overflow: 'hidden' }}>
            {description}
          </Card.Text>
          <div className="d-flex my-2 justify-content-between">
            <Button variant="primary">
              {price || 100}
              <FaRegGrinTongueSquint />
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                navigate(`${id}/${quantity}`);
              }}
            >
              Check Details
            </Button>
          </div>
          <div className="d-flex my-2 justify-content-between">
            <Button
              variant="success"
              style={quantity > 0 ? {} : { width: '100%' }}
              onClick={add}
            >
              add<FaRegGrinTongueSquint />
            </Button>
            {quantity > 0 ? (
              <>
                <p>{quantity}</p>
                <Button variant="danger" onClick={remove}>
                  remove<FaRegGrinTongueSquint />
                </Button>
              </>
            ) : (
              ''
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;