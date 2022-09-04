import React from "react";
import { Nav } from "components/shared";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className={"app"}>
      <Nav />
      <div className={"main"}>{children}</div>
    </div>
  );
};

export default Layout;
