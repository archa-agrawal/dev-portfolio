import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import "./nav.scss";

const nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    if (size.width > 1000 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={"navheader"}>
      <div className={"navheader__content"}>
        <a href={"#home"} className={"navheader__content__logo"}>
          Archana Agrawal
        </a>
        <nav
          className={`${"navheader__content__nav"} ${
            menuOpen && size.width < 1000 ? "isMenu" : ""
          }`}
        >
          <ul>
            <li>
              <a href={"#home"} onClick={menuToggleHandler}>
                Home
              </a>
            </li>
            <li>
              <a href={"#intro"} onClick={menuToggleHandler}>
                About
              </a>
            </li>
            <li>
              <a href={"#projects"} onClick={menuToggleHandler}>
                Projects
              </a>
            </li>
          </ul>
          <button onClick={() => {}}>Resume</button>
        </nav>
        <div className={"navheader__content__toggle"}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default nav;
