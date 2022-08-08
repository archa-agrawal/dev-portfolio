import React from "react";
import "./nav.scss";

const nav = () => {
  return (
    <div className={"nav"}>
      <div className={"left"}>ARCHANA AGRAWAL</div>
      <div className={"right"}>
        <a href={"#home"} className={"link"}>
          Home
        </a>
        <a href={"#intro"} className={"link"}>
          About Me
        </a>
        <a href={"#projects"} className={"link"}>
          Projects
        </a>
        <a href={"#contact"} className={"link last-link"}>
          Contact Me
        </a>
        <a href={"#resume"} className={"button"}>
          Resume
        </a>
      </div>
    </div>
  );
};

export default nav;
