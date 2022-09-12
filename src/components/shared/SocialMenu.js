import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FaDev } from "react-icons/fa";
import "./socialMenu.scss";

export default function SocialMenu() {
  return (
    <div className={"samajik-menu"}>
      <ul className={"samajik-menu-list"}>
        <li>
          <a
            href={"https://github.com/archa-agrawal"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FiGithub size={"1.6rem"} />
          </a>
        </li>
        <li>
          <a
            href={"https://www.linkedin.com/in/archana-ag/"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FiLinkedin size={"1.6rem"} />
          </a>
        </li>
        <li>
          <a
            href={"https://medium.com/@archana.agrawal3"}
            target={"_blank"}
            rel="noreferrer"
          >
            <AiOutlineMedium size={"1.6rem"} />
          </a>
        </li>
        <li>
          <a
            href={"https://dev.to/archanaagrawal"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FaDev size={"1.6rem"} />
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              window.open(
                "./archana-agrawal-resume.pdf",
                "_blank",
                "fullscreen=yes"
              )
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <ImProfile size={"1.6rem"} />
          </a>
        </li>
      </ul>
    </div>
  );
}
