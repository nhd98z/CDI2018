import React, { Component } from "react";
import Anchor1 from "./Anchor1";
import Anchor2 from "./Anchor2";
import Anchor3 from "./Anchor3";
import Anchor4 from "./Anchor4";
import Header from "./Header";

export default class Home extends Component {
    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
      };
    
      componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
      };
      handleScroll = () => {
        if (
            window.pageYOffset >
              document.getElementById("anchor3").offsetTop-100 && window.pageYOffset<document.getElementById("anchor3").offsetTop+100
          ) {
            window.location.hash = "#award";
          }
          if (
            window.pageYOffset >
              document.getElementById("anchor4").offsetTop-100 && window.pageYOffset<document.getElementById("anchor4").offsetTop+100
          ) {
            window.location.hash = "#timeline";
          }
          
      };
  render() {
    return (
        <div>
      <Header/>
          <Anchor1 />
          <Anchor2 />
          <Anchor3 />
          <Anchor4 />
      </div>
    );
  }
}
