import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../Contexts/CartContext";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo.webp";

function CarNavbar() {
  const { mycounter } = useContext(CartContext);
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
            <Nav.Link className="text-danger cart-link">
              <FaShoppingCart className="cart-icon"></FaShoppingCart>
              <span className="cart-count">{mycounter}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CarNavbar;



//-------------------------------------
// import { useState } from 'react';
// import { Navbar, Nav, Button ,Offcanvas} from 'react-bootstrap';

// function AppNavbar() {
//   const [showNav, setShowNav] = useState(false);

//   const handleShowNav = () => setShowNav(true);
//   const handleCloseNav = () => setShowNav(false);

//   return (
//     <Navbar expand="lg">
//       <Navbar.Brand href="#">My Website</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbar-nav" onClick={handleShowNav} />
//       <Navbar.Collapse id="navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#">Home</Nav.Link>
//           <Nav.Link href="#">Store</Nav.Link>
//           <Nav.Link href="#">Contact Us</Nav.Link>
//         </Nav>
//         <Nav>
//           <Button variant="outline-primary" href="#">Cart</Button>
//         </Nav>
//       </Navbar.Collapse>
//       <Offcanvas show={showNav} onHide={handleCloseNav} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link href="#" onClick={handleCloseNav}>Home</Nav.Link>
//             <Nav.Link href="#" onClick={handleCloseNav}>Store</Nav.Link>
//             <Nav.Link href="#" onClick={handleCloseNav}>Contact Us</Nav.Link>
//             <Nav.Item>
//               <Button variant="outline-primary" href="#" onClick={handleCloseNav}>Cart</Button>
//             </Nav.Item>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </Navbar>
//   );
// }

// export default AppNavbar;