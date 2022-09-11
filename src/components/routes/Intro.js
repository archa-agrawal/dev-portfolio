import React from "react";
import TechBadge from "components/functional/TechBadge";
import techs from "components/data/techs";

import "./intro.scss";

const Intro = () => {
  const badges = Object.values(techs).map((icon) => (
    <TechBadge key={icon.title} icon={icon} />
  ));

  return (
    <div id={"intro"} className={"intro"}>
      <div className={"intro-container"}>
        <h2>About Me</h2>
        <p>
          Hello world! I recently graduated from Lighthouse labs with a diploma
          in web development. I come from a medical research background. My
          extensive training and experience in research make me a strong
          programmer with refined problem solving and debugging skills.
        </p>
        <p>
          Work ethics and progressive culture play a very important part of
          defining an ideal workplace for me. I aspire to work in the industry
          that takes pride in having values such as inclusion, equality, and
          diversity. I offer to bring empathy, teamwork, and interpersonal
          skills to contribute to a positive work environment.
        </p>
        <div className={"my-tech-container"}>
          <h3>My Tech Stack</h3>
          <div className={"my-tech"}>{badges}</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
