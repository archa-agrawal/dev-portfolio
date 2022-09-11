import React from "react";
import "./project.scss";
import TechBadge from "./TechBadge";

const project = ({ children, img, name, desc, techs, inverted }) => {
  const Techs = techs?.map((tech) => (
    <TechBadge key={tech.title} icon={tech} />
  ));
  return (
    <div className={"project"}>
      <div className={`project-meta ${inverted ? "inverted" : ""}`}>
        <div className="project-image-container">
          <img src={img} className={"project-image"} />
        </div>
        <div className={"project-details"}>
          <h3 className={"project-title"}>{name}</h3>
          <p className={"project-desc"}>{desc}</p>
          <div className={"project-techs"}>{Techs}</div>
          <div className={"project-actions"}>{children}</div>
        </div>
      </div>
      <div className="hr-container">
        <hr />
      </div>
    </div>
  );
};

export default project;
