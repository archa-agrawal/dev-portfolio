import React from "react";

const project = ({ img, name, desc, github, live }) => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={img} />
      <p>{desc}</p>
      <a href={github}>Github</a>
      <a href={live}>Live</a>
    </div>
  );
};

export default project;
