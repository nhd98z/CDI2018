import React, { Component } from "react";
import Anchor1 from "./Anchor1";
import Anchor2 from "./Anchor2";
import Anchor3 from "./Anchor3";
import Anchor4 from "./Anchor4";
import Anchor5 from "./Anchor5";
import Anchor6 from "./Anchor6";
import Anchor7 from "./Anchor7";
import Header from "./Header";
import Footer from './Footer';

export default class Home extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = () => {
    if (
      window.pageYOffset < document.getElementById("anchor1").offsetTop + 100
    ) {
      window.location.hash = "#home";
    }
    if (
      window.pageYOffset > document.getElementById("anchor2").offsetTop - 100 &&
      window.pageYOffset < document.getElementById("anchor2").offsetTop + 100
    ) {
      window.location.hash = "#intro";
    }
    if (
      window.pageYOffset > document.getElementById("anchor3").offsetTop - 100 &&
      window.pageYOffset < document.getElementById("anchor3").offsetTop + 100
    ) {
      window.location.hash = "#award";
    }
    if (
      window.pageYOffset > document.getElementById("anchor4").offsetTop - 100 &&
      window.pageYOffset < document.getElementById("anchor4").offsetTop + 100
    ) {
      window.location.hash = "#timeline";
    }
    if (
      window.pageYOffset > document.getElementById("anchor5").offsetTop - 100 &&
      window.pageYOffset < document.getElementById("anchor5").offsetTop + 100
    ) {
      window.location.hash = "#about";
    }
    if (
      window.pageYOffset > document.getElementById("anchor6").offsetTop - 100 &&
      window.pageYOffset < document.getElementById("anchor6").offsetTop + 100
    ) {
      window.location.hash = "#examiner";
    }
    if (
      window.pageYOffset > document.getElementById("anchor7").offsetTop - 100 &&
      window.pageYOffset < document.getElementById("anchor7").offsetTop + 100
    ) {
      window.location.hash = "#partner";
    }
  };
  render() {
    return (
      <div>
        <Header />
        <Anchor1 />
        <Anchor2 />
        <Anchor3 />
        <Anchor4 />
        <Anchor5 />
        <Anchor7 />
        <Anchor6 />
        
        <Footer/>
      </div>
    );
  }
}
