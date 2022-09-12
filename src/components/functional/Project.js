import React from "react";
import "./project.scss";
import TechBadge from "./TechBadge";
import SocialButton from "./SocialButton";
import { SiGithub } from "react-icons/all";

const project = ({ img, name, desc, techs, inverted, githubActions }) => {
  const Techs = techs?.map((tech) => (
    <TechBadge key={tech.title} icon={tech} />
  ));
  const actions = githubActions.map((action) => (
    <SocialButton
      key={action.title}
      title={action.title}
      link={action.link}
      Icon={SiGithub}
    />
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
          <div className={"project-actions"}>{actions}</div>
        </div>
      </div>
      <div className="hr-container">
        <hr />
      </div>
    </div>
  );
};

export default project;
