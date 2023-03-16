import {
  AdobeXd,
  AWS,
  backend,
  bootstrap,
  css3,
  DigitalOcean,
  ExpressJs,
  Figma,
  frontend,
  GIT,
  GitHub,
  html5,
  JavaScript,
  MongoDb,
  MUI,
  MySQL,
  NodeJs,
  ReactJs,
  Redux,
  scss,
  tools,
} from "../sources";

export const techStacks = [
  {
    id: 1,
    title: "Frontend",
    icon: frontend,
    stack: [
      {
        id: 1,
        img: html5,
        title: "HTML5",
      },
      {
        id: 2,
        img: css3,
        title: "CSS3",
      },
      {
        id: 3,
        img: scss,
        title: "SCSS",
      },
      {
        id: 4,
        img: bootstrap,
        title: "Bootstrap",
      },
      {
        id: 5,
        img: JavaScript,
        title: "JavaScript",
      },
      {
        id: 6,
        img: ReactJs,
        title: "React Js",
      },
      {
        id: 7,
        img: Redux,
        title: "Redux",
      },
      {
        id: 8,
        img: MUI,
        title: "Material UI",
      },
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: backend,
    stack: [
      {
        id: 1,
        img: NodeJs,
        title: "Node Js",
      },
      {
        id: 2,
        img: ExpressJs,
        title: "Express Js",
      },
      {
        id: 3,
        img: MongoDb,
        title: "Mongo DB",
      },
      {
        id: 4,
        img: MySQL,
        title: "My SQL",
      },
    ],
  },
  {
    id: 3,
    title: "Tools",
    icon: tools,
    stack: [
      {
        id: 1,
        img: GIT,
        title: "GIT",
      },
      {
        id: 2,
        img: GitHub,
        title: "GitHub",
      },
      {
        id: 3,
        img: AdobeXd,
        title: "Adobe Xd",
      },
      {
        id: 4,
        img: Figma,
        title: "Figma",
      },
      {
        id: 5,
        img: DigitalOcean,
        title: "Digital Ocean",
      },
      {
        id: 3,
        img: AWS,
        title: "AWS",
      },
    ],
  },
];
