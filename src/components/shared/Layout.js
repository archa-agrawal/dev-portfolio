import React from "react";
import Nav from "./Nav";
import SocialMenu from "./SocialMenu";
import "./layout.scss";
import EmailBadge from "./EmailBadge";

const Layout = ({ children }) => {
  return (
    <div className={"app"}>
      <SocialMenu />
      <Nav />
      <EmailBadge />
      <div className={"main"}>{children}</div>
    </div>
  );
};

export default Layout;
