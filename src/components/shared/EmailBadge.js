import React from "react";
import "./emailBadge.scss";

export default function EmailBadge() {
  return (
    <div className={"email-badge"}>
      <a href={"mailto:archana.agrawal3@outlook.com"} className={"email"}>
        archana.agrawal3@outlook.com
      </a>
    </div>
  );
}
