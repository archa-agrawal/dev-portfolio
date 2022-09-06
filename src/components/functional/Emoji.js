import React from "react";

const Emoji = ({ children }) => (
  <span aria-hidden="true" role="img">
    {children}
  </span>
);

export default Emoji;
