import React from "react";
import "./nav.scss";

const nav = () => {
  return (
    <div className={"nav"} style={{ backgroundColor: "red" }}>
      <ul>
        <li>Home</li>
        <li>Intro</li>
        <li>Projects</li>
        <li>Contact Me</li>
        <button>Resume</button>
      </ul>
    </div>
  );
};

export default nav;
