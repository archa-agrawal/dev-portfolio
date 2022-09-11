import techs from "./techs";

const projects = [
  {
    name: "Mapi",
    description:
      "MAPI is the map based social media app. It lets users create and share maps with the world. Users can create a map with a title and description, pin different types of locations on the map, and can share it. \n        \nOther registered and non registered users can see the maps created by others. Maps can also be assigned themes for personalization.",
    img: "./mac-mapi.png",
    techs: [
      techs.node,
      techs.react,
      techs.redux,
      techs.sass,
      techs.express,
      techs.postgresql,
      techs.passport,
      techs.storybook,
    ],
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
      "Decision maker is an app that helps a group decide the best option by ranking the given choices. Users can create polls with as many choices they want. The app uses Mailgun API to mail the link of the poll to creators. They can vote and share the link of the polls with others. \nVoters can rank their choices by dragging and dropping. The creator of the poll can access the poll results using the result link at any time. This app uses Borda count ranking method to rank the choices.",
    img: "./mac-dm.png",
    techs: [
      techs.node,
      techs.ejs,
      techs.sass,
      techs.express,
      techs.postgresql,
      techs.bootstrap,
      techs.jquery,
    ],
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
      "This app helps a recruitment organization manage interview calendars for its employees and candidates. Users can book, edit, and delete their interviews.",
    img: "./mac-scheduler.png",
    techs: [
      techs.node,
      techs.react,
      techs.sass,
      techs.express,
      techs.postgresql,
      techs.storybook,
      techs.testingLibrary,
      techs.jest,
    ],
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
