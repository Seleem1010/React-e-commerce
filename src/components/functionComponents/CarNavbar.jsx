import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo.webp";
import { useSelector } from "react-redux";


function CarNavbar() {

  const {mycounter} = useSelector((state)=>state.CartSlice)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="navbar-custom"
    >
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center justify-content-end">
          <img
            src={Logo} // use the imported image
            alt="Car Ecommerce Site Logo"
            className="brand-icon"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/cars">
              Cars
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </Nav>
          <Nav className="ml-auto">
            <NavLink className="text-danger cart-link" to="/Cart">
              <FaShoppingCart className="cart-icon"></FaShoppingCart>
              <span className="cart-count">{mycounter}</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CarNavbar;
