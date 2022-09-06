import React, { useState, useEffect } from "react";

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const FloatingIcon = ({ Icon, color, container }) => {
  const [magic, setMagic] = useState("");
  const [top, setTop] = useState(
    getRandomNumber(container.top, container.bottom)
  );
  const [left, setLeft] = useState(
    getRandomNumber(container.left, container.right)
  );

  useEffect(() => {
    setTimeout(() => {
      setMagic("magictime puffOut");
      setTimeout(() => {
        setTop(getRandomNumber(container.top, container.bottom));
        setLeft(getRandomNumber(container.left, container.right));
        setMagic("magictime puffIn");
      }, getRandomNumber(500, 2000));
    }, getRandomNumber(200, 800));
    setInterval(() => {
      setMagic("magictime puffOut");
      setTimeout(() => {
        setTop(getRandomNumber(container.top, container.bottom));
        setLeft(getRandomNumber(container.left, container.right));
        setMagic("magictime puffIn");
      }, getRandomNumber(500, 2000));
    }, getRandomNumber(3000, 5000));
  }, []);

  return (
    <div
      className={`floating-icon ${magic}`}
      style={{ position: "absolute", top, left, zIndex: 1 }}
    >
      <Icon color={color} size={"30px"} />
    </div>
  );
};

export default FloatingIcon;
