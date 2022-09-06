import React from "react";
import FloatingIcon from "./FloatingIcon";

const DynamicBackground = ({ icons, container, className }) => {
  const Icons = icons.map((icon, index) => (
    <FloatingIcon
      key={index}
      Icon={icon.icon}
      color={icon.color}
      container={container}
    />
  ));
  return <div className={className}>{Icons}</div>;
};

export default DynamicBackground;
