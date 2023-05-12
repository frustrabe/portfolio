import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

// grimace-fire
/* export let colors = ["rgb(82,36,163)", "rgb(255,75,24)"]; */

// flamingo-aqua
/* export let colors = ["rgb(255,27,138)", "rgb(1,237,255)"]; */
// aqua-flamingo
/* export let colors = ["rgb(1,237,255))", "rgb(255,27,138)"]; */

// pine-aqua (secondary)
/* export let colors = ["rgb(18,62,33)", "rgb(1,237,255)"]; */
// aqua-pine (secondary)
/* export let colors = ["rgb(1,237,255)", "rgb(18,62,33)"]; */

// sun-flamingo (primary)
/* export let colors = ["rgb(225,228,41)", "rgb(255,27,138)"]; */

export let colors = ["rgb(183,33,255)", "rgb(33,212,253)"];

// flamingo-sun (primary)
/* export let colors = ["rgb(255,27,138)", "rgb(235,228,41)"];
 */
// fire-navy
/* export let colors = ["rgb(255,75,24)", "rgb(0,51,192)"]; */
// navy-fire
/* export let colors = ["rgb(0,51,192)", "rgb(255,75,24)"]; */

export const info = {
  firstName: "Lukas",
  lastName: "Forner",
  initials: "lf",
  position: "full-stack development student",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🌎",
      text: "based in Odense, Denmark",
    },
    {
      emoji: "📚",
      text: "studying at Cphbusiness Lyngby",
    },
    {
      emoji: "🔍",
      text: "looking for an internship",
    },
    {
      emoji: "📨",
      text: "lukas.forner@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://drive.google.com/file/d/1vC0emDdmmUWTZ9FpEAsY0T1VlL6Sq74x/view?usp=share_link",
      icon: "fa fa-file-pdf-o",
      label: "cv",
    },
    {
      link: "https://www.linkedin.com/in/lukas-forner/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://github.com/frustrabe",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.instagram.com/ffrstrbb/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://twitter.com/frustrabe",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    {
      link: "https://steamcommunity.com/id/frustrabe",
      icon: "fa fa-steam",
      label: "steam",
    },
  ],
  bio: "hi there! i'm an aspiring web developer, currently studying BA in web development and actively looking for an internship! i love a good piece of music, or a nice walk outdoors. i also have a soft spot for sceneries",
  skills: {
    experienceWith: [
      "html5",
      "css3",
      "javascript",
      "reactjs",
      "mongodb",
      "git",
      "github",
    ],
    exposedTo: [
      "nodejs",
      "typescript",
      "postgres",
      "nestjs",
      "typeorm",
      "vite",
      "docker",
      "figma",
    ],
  },
  hobbies: [
    {
      label: "coding",
      emoji: "💻",
    },
    {
      label: "guitar",
      emoji: "🎸",
    },
    {
      label: "music",
      emoji: "🎵",
    },
    {
      label: "running",
      emoji: "🏃🏻",
    },
    {
      label: "csgo",
      emoji: "🎮",
    },
    {
      label: "books",
      emoji: "📖",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "Daos Tutti (dockerized)",
      video: "https://youtu.be/bsF38Hl2TzY",
      source: "https://github.com/frustrabe/devOps-daos",
      image: mock1,
    },
    {
      title: "Portfolio template site",
      live: "http://fornerlukas.com/",
      source: "https://github.com/frustrabe/portfolio",
      image: mock5,
    },
    {
      title: "Number counter",
      video: "https://youtu.be/5lElZSSy5ns",
      source: "https://github.com/frustrabe/vanilla-js-number-counter",
      image: mock2,
    },
    {
      title: "Color generator",
      video: "https://youtu.be/Aeq3EGyDuf4",
      source: "https://github.com/frustrabe/vanilla-js-color-generator",
      image: mock3,
    },
    {
      title: "Search through Robots app",
      video: "https://youtu.be/rFp0QaWhODk",
      live: "https://frustrabe.github.io/robots/",
      source: "https://github.com/frustrabe/robots",
      image: mock4,
    },
  ],
};
