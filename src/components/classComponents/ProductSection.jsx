
//#########################################################################
//#########################################################################
//#########################################################################
//#########################################################################
//########################### using Class ###############################
//#########################################################################
//#########################################################################

import React, { Component } from "react";
import Card from "./Card";
export default class ProductSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((dataArr) => this.setState({ products: dataArr }));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}
