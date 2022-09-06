import React from "react";
import TechBadge from "components/functional/TechBadge";
import techs from "components/data/techs";

import "./intro.scss";

const Intro = () => {
  const badges = Object.values(techs).map((icon) => (
    <TechBadge key={icon.title} icon={icon} />
  ));

  return (
    <div id={"intro"} className={"intro"}>
      <div className={"intro-container"}>
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
          dui sapien eget mi proin sed libero. Suscipit adipiscing bibendum est
          ultricies integer quis. Tortor id aliquet lectus proin nibh nisl
          condimentum.
        </p>
        <p>
          Egestas quis ipsum suspendisse ultrices gravida dictum. Orci nulla
          pellentesque dignissim enim sit amet venenatis urna. Orci dapibus
          ultrices in iaculis.
        </p>
        <div className={"my-tech-container"}>
          <h3>My Tech Stack</h3>
          <div className={"my-tech"}>{badges}</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
