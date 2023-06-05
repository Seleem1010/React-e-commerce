//########################################################
//########################################################
//########################################################
//####################### using function ####################
//########################################################

import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFortAwesomeAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {CartContext} from "../../Contexts/CartContext";
import { NavLink } from "react-router-dom";

function CollapsibleExample() {
  const {mycounter} = useContext(CartContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <FaFortAwesomeAlt></FaFortAwesomeAlt> Selim Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/store">Store</NavLink>
            <NavLink className="nav-link" to="/login">LogIn</NavLink>
            
            
          </Nav>
          <Nav>
          <NavLink className="nav-link" to="/Cart"><FaShoppingCart></FaShoppingCart>: {mycounter}</NavLink>
            
            {/* <Nav.Link className="text-danger" disabled><FaShoppingCart></FaShoppingCart> : {mycounter}</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

