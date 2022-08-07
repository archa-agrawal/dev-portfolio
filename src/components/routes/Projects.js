import React from "react";
import { Project } from "@components/functional";

const Projects = () => (
  <div>
    <h3>Projects</h3>
    <ul>
      <li>
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
      </li>
    </ul>
  </div>
);

export default Projects;
