import React, { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FaDev } from "react-icons/fa";
import "./socialMenu.scss";

export default function SocialMenu() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  return (
    <div className={"social-menu"}>
      <ul className={"social-menu-list"}>
        <li>
          <FiGithub size={size.width > 1000 ? "30px" : "20px"} />
        </li>
        <li>
          <FiLinkedin size={size.width > 1000 ? "30px" : "20px"} />
        </li>
        <li>
          <AiOutlineMedium size={size.width > 1000 ? "30px" : "20px"} />
        </li>
        <li>
          <FaDev size={size.width > 1000 ? "30px" : "20px"} />
        </li>
        <li>
          <ImProfile size={size.width > 1000 ? "30px" : "20px"} />
        </li>
      </ul>
    </div>
  );
}
