import React from "react";
import "./project.scss";

const project = ({ img, name, desc, github, live }) => {
  return (
    <div className={"project"}>
      <div className={"project-meta"}>
        <img src={img} className={"project-image"} />
        <div className={"project-details"}>
          <h4>{name}</h4>
          <p className={"project-desc"}>{desc}</p>
          <a href={github} className={"project-button"}>
            Github
          </a>
          <a href={live} className={"project-button"}>
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default project;
