import React from "react";

import "./hero.scss";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }} id={"home"}>
      <div className={"hero-container"}>
        <img className={"avatar"} src={"./static/avatar.png"} />
        <div className={"details"}>
          <p>Hi, my name is</p>
          <h2>Archana Agrawal,</h2>
          <h3>I am a web developer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            dui sapien eget mi proin sed libero. Suscipit adipiscing bibendum
            est ultricies integer quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
