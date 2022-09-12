import React from "react";
import Project from "components/functional/Project";
import projects from "components/data/projects";
import "./projects.scss";

const Projects = () => {
  const ProjectsArr = projects.map((project, index) => {
    return (
      <Project
        name={project.name}
        desc={project.description}
        img={project.img}
        techs={project.techs}
        key={project.name}
        githubActions={project.githubActions}
        inverted={!!(index % 2)}
      />
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
