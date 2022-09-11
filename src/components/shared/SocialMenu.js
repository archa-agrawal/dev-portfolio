import React, { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FaDev } from "react-icons/fa";
import "./socialMenu.scss";

export default function SocialMenu() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  if (typeof window !== "undefined") {
    useEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);
  }

  return (
    <div className={"social-menu"}>
      <ul className={"social-menu-list"}>
        <li>
          <a
            href={"https://github.com/archa-agrawal"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FiGithub size={size.width > 1000 ? "30px" : "20px"} />
          </a>
        </li>
        <li>
          <a
            href={"https://www.linkedin.com/in/archana-ag/"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FiLinkedin size={size.width > 1000 ? "30px" : "20px"} />
          </a>
        </li>
        <li>
          <a
            href={"https://medium.com/@archana.agrawal3"}
            target={"_blank"}
            rel="noreferrer"
          >
            <AiOutlineMedium size={size.width > 1000 ? "30px" : "20px"} />
          </a>
        </li>
        <li>
          <a
            href={"https://dev.to/archanaagrawal"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FaDev size={size.width > 1000 ? "30px" : "20px"} />
          </a>
        </li>
        <li>
          <a
            href={"https://github.com/archa-agrawal"}
            target={"_blank"}
            rel="noreferrer"
          >
            <ImProfile size={size.width > 1000 ? "30px" : "20px"} />
          </a>
        </li>
      </ul>
    </div>
  );
}
