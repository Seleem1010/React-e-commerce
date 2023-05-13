
//#####################################################
//#####################################################
//#####################################################
//##################### using class ###################
//#####################################################

import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { FaRegGrinTongueSquint } from "react-icons/fa";
import { FaRegGrinTongueWink } from "react-icons/fa";
import { FaRegGrinWink } from "react-icons/fa";
export default class Slider extends Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              First slide label <FaRegGrinWink></FaRegGrinWink>
            </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
              Second slide label <FaRegGrinTongueWink></FaRegGrinTongueWink>
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&width=1200"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>
              Third slide label <FaRegGrinTongueSquint></FaRegGrinTongueSquint>
            </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
