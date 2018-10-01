import React, { Component } from "react";
import Anchor1 from "./Anchor1";
import Anchor2 from "./Anchor2";
import Anchor3 from "./Anchor3";
import Anchor4 from "./Anchor4";
import Anchor5 from "./Anchor5";
import Anchor6 from "./Anchor6";
import Anchor7 from "./Anchor7";
import Header from "./Header";
import Footer from "./Footer";
import fullpage from "fullpage.js";

export default class Home extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = () => {
    if (window.pageYOffset === document.getElementById("anchor1").offsetTop) {
      window.location.hash = "#home";
    }
    if (window.pageYOffset === document.getElementById("anchor2").offsetTop) {
      window.location.hash = "#intro";
    }
    if (window.pageYOffset === document.getElementById("anchor3").offsetTop) {
      window.location.hash = "#award";
    }
    if (window.pageYOffset === document.getElementById("anchor4").offsetTop) {
      window.location.hash = "#timeline";
    }
    if (window.pageYOffset === document.getElementById("anchor5").offsetTop) {
      window.location.hash = "#about";
    }
    if (window.pageYOffset === document.getElementById("anchor6").offsetTop) {
      window.location.hash = "#examiner";
    }
    if (window.pageYOffset === document.getElementById("anchor7").offsetTop) {
      window.location.hash = "#partner";
    }
  };

  render() {
    new fullpage("#fullpage", {
      anchors: [
        "#home",
        "#intro",
        "#award",
        "#timeline",
        "#about",
        "#partner",
        "#examiner"
      ],
      scrollingSpeed: 700
    });
    return (
      <div>
        <Header />
        <div id="fullpage">
          <div id="home" className="section">
            <Anchor1 />
          </div>
          <div id="intro" className="section">
            <Anchor2 />
          </div>
          <div id="award" className="section">
            <Anchor3 />
          </div>
          <div id="timeline" className="section">
            <Anchor4 />
          </div>
          <div id="about" className="section">
            <Anchor5 />
          </div>
          <div id="partner" className="section">
            <Anchor7 />
          </div>
          <div id="examiner" className="section">
            <Anchor6 />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
