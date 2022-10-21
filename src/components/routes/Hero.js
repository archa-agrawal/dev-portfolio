import React from "react";
import "./hero.scss";
import Emoji from "components/functional/Emoji";

const Hero = () => {
  return (
    <div id={"home"}>
      <div className={"hero-container"}>
        <img className={"avatar"} src={"./profile-1.png"} />
        <div className={"details"}>
          <h3>
            Hi<Emoji>👋</Emoji>, my name is
          </h3>
          <h1>Archana Agrawal,</h1>
          <h2>
            I am a full stack developer<Emoji>👩🏽‍💻</Emoji>
          </h2>
          <p>
            I have a passion for technology. I bring my research and
            problem-solving aptitude to develop high quality and user-friendly
            software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
