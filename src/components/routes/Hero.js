import React from "react";

import "./hero.scss";

const Hero = () => (
  <div style={{ backgroundColor: "yellow" }} id={"home"}>
    <div className={"hero-container"}>
      <p>Hi, my name is</p>
      <h2>Archana Agrawal,</h2>
      <h3>I am a web developer</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien
        eget mi proin sed libero. Suscipit adipiscing bibendum est ultricies
        integer quis.
      </p>
    </div>
  </div>
);

export default Hero;
