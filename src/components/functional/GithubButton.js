import React from "react";
import { SiGithub } from "react-icons/all";
import "./githubButton.scss";

const GithubButton = ({ title, link }) => {
  return (
    <a
      href={link}
      target={"_blank"}
      rel="noreferrer"
      className={"github-button-container"}
    >
      <SiGithub />
      <div className={"github-button-title"}>{title}</div>
    </a>
  );
};

export default GithubButton;
