import React from "react";
import SocialButton from "components/functional/SocialButton";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

import "./Contact.scss";

const Contact = () => {
  return (
    <div id={"contact"}>
      <div className={"contact-container"}>
        <div className={"email-container"}>
          <p>Contact me at: </p>
          <a href={"mailto:archana.agrawal3@outlook.com"}>
            archana.agrawal604@gmail.com
          </a>
        </div>

        <div>
          <p>
            Download my:{" "}
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
              href={"#"}
            >
              Resume
            </a>
          </p>
        </div>

        <p>Connect on</p>
        <div className={"samajik-container"}>
          <SocialButton
            key={"LinkedIn"}
            title={"LinkedIn"}
            link={"https://www.linkedin.com/in/archana-ag/"}
            Icon={FiLinkedin}
          />
          <SocialButton
            key={"Github"}
            title={"Github"}
            link={"https://github.com/archa-agrawal"}
            Icon={FiGithub}
          />
          <SocialButton
            key={"Medium"}
            title={"Medium"}
            link={"https://medium.com/@archana.agrawal3"}
            Icon={AiOutlineMedium}
          />
          <SocialButton
            key={"Dev.to"}
            title={"Dev.to"}
            link={"https://dev.to/archanaagrawal"}
            Icon={FaDev}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
