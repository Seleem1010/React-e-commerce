
//#########################################################
//#########################################################
//#########################################################
//############################## Using class ###################
//#########################################################

import React, { Component } from "react";
import Navbar from "./components/classComponents/Navbar";
import Slider from "./components/classComponents/Slider";
import Acordion from "./components/classComponents/Acordion";
import Footer from "./components/classComponents/Footer";
import ProductSection from "./components/classComponents/ProductSection";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Slider />
        <Acordion />
        <ProductSection />
        <Footer />
      </>
    );
  }
}
