import React from "react";
import { Project } from "components/functional";
import "./projects.scss";

const Projects = () => (
  <div style={{ backgroundColor: "lightgrey" }} id={"projects"}>
    <div className={"projects-container"}>
      <h3>Projects</h3>
      <Project
        name={"First Project"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero. Suscipit adipiscing bibendum est ultricies integer quis. Tortor id aliquet lectus proin nibh nisl condimentum. Egestas quis ipsum suspendisse ultrices gravida dictum. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Orci dapibus ultrices in iaculis. "
        }
        img={
          "https://userguiding.com/wp-content/uploads/2021/02/ux-ui-trends-neuromorphic-2.png"
        }
        github={"https://github.com/archa-agrawal/todo-list-fe"}
        live={"fakefake"}
      />
      <Project
        name={"First Project"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero. Suscipit adipiscing bibendum est ultricies integer quis. Tortor id aliquet lectus proin nibh nisl condimentum. Egestas quis ipsum suspendisse ultrices gravida dictum. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Orci dapibus ultrices in iaculis. "
        }
        img={
          "https://userguiding.com/wp-content/uploads/2021/02/ux-ui-trends-neuromorphic-2.png"
        }
        github={"https://github.com/archa-agrawal/todo-list-fe"}
        live={"fakefake"}
      />
    </div>
  </div>
);

export default Projects;
