import React from "react";
import "./TechBadge.scss";

export default function TechBadge({ icon: { icon: Icon, title, color } }) {
  return (
    <div className={"tech-badge-container"}>
      <div className={"tech-badge"}>
        <Icon size={"18px"} color={color} />
      </div>
      <div className={"tech-title"}>{title}</div>
    </div>
  );
}
