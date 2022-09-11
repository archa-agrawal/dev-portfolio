import React from "react";
import "./hero.scss";
/*import DynamicBackground from "components/functional/DynamicBackground";
import {
  SiReact,
  SiRedux,
  SiPostgresql,
  SiNodedotjs,
  SiHtml5,
  SiStorybook,
  SiSass,
  SiJest,
  SiMocha,
  SiJquery,
  SiCss3
} from "react-icons/si";
import {HiCode} from "react-icons/hi"*/
import Emoji from "components/functional/Emoji";

const Hero = () => {
  /*
  const rightIcons = [{
    icon: SiMocha,
    color: "#8d6849"
  },{
    icon: SiSass,
    color: "#cf649a"
  }]
  const leftIcons = [{
    icon: HiCode,
    color: "blue"
  }, {
    icon: SiHtml5,
    color: "#e34c26"
  }
  ]
  const bottomLeftIcons = [
    {
      icon: SiReact,
      color: "#34a4dc"
    },{
      icon: SiRedux,
      color: "#764abc"
    },{
      icon: SiPostgresql,
      color: "#336791"
    },
    {
      icon: SiJest,
      color: "red"
    }
  ]

  const bottomRightIcons = [
    {
      icon: SiNodedotjs,
      color: "#3c873a"
    },
    {
      icon: SiStorybook,
      color: "#ff4785"
    },
    {
      color: "#264de4",
      icon: SiCss3
    },
    {
      icon: SiJquery,
      color: "#0769ad"
    }
  ]

  const leftDynamicBackground = {
    top: 0,
    bottom: (30*window.innerHeight)/100,
    left: 0,
    right: (10*window.innerWidth)/100
  }
  const rightDynamicBackground = {
    top: 0,
    bottom: (30*window.innerHeight)/100,
    left: (90*window.innerWidth)/100,
    right: window.innerWidth - 50
  }
  const bottomLeftDynamicBackground = {
    top: (50*window.innerHeight)/100,
    bottom:(80*window.innerHeight)/100,
    left: (10*window.innerWidth)/100,
    right: (50*window.innerWidth)/100,
  }
  const bottomRightDynamicBackground = {
    top: (50*window.innerHeight)/100,
    bottom:(80*window.innerHeight)/100,
    left: (50*window.innerWidth)/100,
    right: (90*window.innerWidth)/100,
  }
   */
  return (
    <div id={"home"}>
      {/*<DynamicBackground container={leftDynamicBackground} icons={leftIcons} className={'dynamic-background-side'}/>
      <DynamicBackground container={rightDynamicBackground} icons={rightIcons}  className={'dynamic-background-side'}/>
      <DynamicBackground container={bottomLeftDynamicBackground} icons={bottomLeftIcons} className={"dynamic-background-bottom"}/>
      <DynamicBackground container={bottomRightDynamicBackground} icons={bottomRightIcons} className={"dynamic-background-bottom"}/>*/}
      <div className={"hero-container"}>
        <img className={"avatar"} src={"./avatar.png"} />
        <div className={"details"}>
          <h3>
            Hi<Emoji>👋</Emoji>, my name is
          </h3>
          <h1>Archana Agrawal,</h1>
          <h2>
            I am a full stack developer<Emoji>👩🏽‍💻</Emoji>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            dui sapien eget mi proin sed libero. Suscipit adipiscing bibendum
            est ultricies integer quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
