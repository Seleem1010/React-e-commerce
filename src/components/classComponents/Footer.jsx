

//########################################################
//########################################################
//########################################################
//####################### using class ####################
//########################################################

import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <Navbar bg="primary bottom" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <FaFacebookSquare></FaFacebookSquare>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <FaGooglePlusSquare></FaGooglePlusSquare>
            </Nav.Link>
            <Nav.Link href="#features">
              <FaYoutubeSquare></FaYoutubeSquare>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <FaGithubSquare></FaGithubSquare>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

