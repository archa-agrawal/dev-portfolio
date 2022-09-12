import React from "react";
import "./socialButton.scss";

const SocialButton = ({ title, link, Icon }) => {
  return (
    <a
      href={link}
      target={"_blank"}
      rel="noreferrer"
      className={"social-button-container"}
    >
      <Icon />
      <div className={"social-button-title"}>{title}</div>
    </a>
  );
};

export default SocialButton;
