
//######################################################
//######################################################
//######################################################
//###################### using class ######################
//######################################################

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FaAccessibleIcon } from "react-icons/fa";
export default class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  add = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  remove = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };
  render() {
    const { image, title, description, price } = this.props.product;
    // console.log(this.props.product);
    return (
      <div className="col-12 col-md-6 col-lg-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">
              {price || 100}
              <FaAccessibleIcon></FaAccessibleIcon>
            </Button>
            <div className="d-flex my-2 justify-content-between">
              <Button
                variant="success"
                style={this.state.quantity > 0 ? {} : { width: "100%" }}
                onClick={this.add}
              >
                add<FaAccessibleIcon></FaAccessibleIcon>
              </Button>
              {this.state.quantity > 0 ? (
                <>
                  <p>{this.state.quantity}</p>
                  <Button variant="danger" onClick={this.remove}>
                    remove<FaAccessibleIcon></FaAccessibleIcon>
                  </Button>
                </>
              ) : (
                ""
              )}
            </div>
          </Card.Body>
        </Card> 
      </div>
    );
  }
}
