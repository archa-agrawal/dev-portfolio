import techs from "./techs";

const projects = [
  {
    name: "Mapi",
    description:
      "A Map sharing social network. Create and share maps with your friends and the world.",
    img: "./mac-mapi.png",
    techs: [techs.node, techs.react, techs.redux, techs.postgresql],
    githubActions: [
      {
        title: "Front-end",
        link: "https://github.com/archa-agrawal/mapi-ui",
      },
      {
        title: "Back-end",
        link: "https://github.com/archa-agrawal/mapi-server",
      },
    ],
  },
  {
    name: "Decision Maker",
    description:
      "Create a ranking based poll and share with your frinds. Also see a detailed report of the result and all submissions.",
    img: "./mac-dm.png",
    techs: [techs.node, techs.ejs, techs.jquery, techs.postgresql],
    githubActions: [
      {
        title: "Github",
        link: "https://github.com/archa-agrawal/decision-maker",
      },
    ],
  },
  {
    name: "Interview Scheduler",
    description:
      "Helps a recruitment organization manage interview calendars for its employees and candidates.",
    img: "./mac-scheduler.png",
    techs: [techs.node, techs.react, techs.postgresql, techs.jest],
    githubActions: [
      {
        title: "Front-end",
        link: "https://github.com/archa-agrawal/scheduler",
      },
      {
        title: "Back-end",
        link: "https://github.com/archa-agrawal/scheduler-api",
      },
    ],
  },
];

export default projects;
