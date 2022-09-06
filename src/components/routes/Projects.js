import React from "react";
import Project from "components/functional/Project";
import projects from "components/data/projects";
import "./projects.scss";
import GithubButton from "../functional/GithubButton";

const Projects = () => {
  const ProjectsArr = projects.map((project) => {
    return (
      <Project
        name={project.name}
        desc={project.description}
        img={project.img}
        techs={project.techs}
        key={project.name}
      >
        {project.githubActions.map((action) => (
          <GithubButton
            key={action.title}
            title={action.title}
            link={action.link}
          />
        ))}
      </Project>
    );
  });

  return (
    <div id={"projects"}>
      <div className={"projects-container"}>
        <h3>Projects</h3>
        {ProjectsArr}
      </div>
    </div>
  );
};

export default Projects;
