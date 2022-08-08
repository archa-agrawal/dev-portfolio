import React from "react";
import { Nav } from "components/shared";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className={"app"}>
      <div className={"header"}>
        <Nav />
      </div>
      <div className={"main"}>{children}</div>
    </div>
  );
};

export default Layout;
