import React from "react";
import Project from "components/functional/Project";
import projects from "components/data/projects";
import "./projects.scss";
import GithubButton from "../functional/GithubButton";

const Projects = () => {
  const ProjectsArr = projects.map((project, index) => {
    return (
      <Project
        name={project.name}
        desc={project.description}
        img={project.img}
        techs={project.techs}
        key={project.name}
        inverted={!!(index % 2)}
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
        <h1>Projects</h1>
        {ProjectsArr}
      </div>
    </div>
  );
};

export default Projects;
