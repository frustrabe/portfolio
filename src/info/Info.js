import self from "../img/self.avif";
import mock1 from "../img/mock1.avif";
import mock2 from "../img/mock2.avif";
import mock3 from "../img/mock3.avif";
import mock4 from "../img/mock4.avif";
import mock5 from "../img/mock5.avif";
import mock6 from "../img/mock6.avif";
import mock7 from "../img/mock7.avif";

// grimace-fire
/* export let colors = ["rgb(82,36,163)", "rgb(255,75,24)"]; */

// flamingo-aqua
/* export let colors = ["rgb(255,27,138)", "rgb(1,237,255)"]; */

// aqua-flamingo
/* export let colors = ["rgb(1,237,255))", "rgb(255,27,138)"]; */

// pine-aqua (secondary)
/* export let colors = ["rgb(18,62,33)", "rgb(1,237,255)"]; */

// aqua-pine (secondary)
export let colors = ["rgb(1,237,255)", "rgb(18,62,33)"];

// sun-flamingo (primary)
/* export let colors = ["rgb(225,228,41)", "rgb(255,27,138)"]; */

// export let colors = ["rgb(183,33,255)", "rgb(33,212,253)"];

export let warmColor = "rgb(239, 104, 55)";

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
  initials: "LF",
  moniker: "frustrabe",
  position: "recent junior sw developer at",
  company: "WARM",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🔎",
      text: "looking for a full-time frontend/backend position",
    },
    {
      emoji: "🌎",
      text: "based in Odense, Denmark",
    },
    {
      emoji: "👨🏼‍🎓",
      text: "bachelor in Web Development, Cphbusiness Lyngby",
    },
    {
      emoji: "📨",
      text: "lukas.forner@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://drive.google.com/file/d/1ibGuAj_Ar_Mmf4-vwZ7DAOKLGi4zOJ5Y/view?usp=drive_link",
      icon: "fa-solid fa-medal",
      label: "recommendation-letter",
      altText: "Recommendation Letter ",
    },
    {
      link: "https://drive.google.com/file/d/14Z5lKnGz6TzNqZbWH_wyneMhUK572fix/view?usp=drive_link",
      icon: "fa-solid fa-file-pdf",
      label: "cv",
      altText: "CV",
    },
    {
      link: "https://www.linkedin.com/in/lukas-forner/",
      icon: "fa-brands fa-linkedin",
      label: "linkedin",
      altText: "LinkedIn",
    },
    {
      link: "https://github.com/frustrabe",
      icon: "fa-brands fa-github",
      label: "github",
      altText: "GitHub",
    },
    {
      link: "https://www.instagram.com/ffrstrbb/",
      icon: "fa-brands fa-instagram",
      label: "instagram",
      altText: "Instagram",
    },
    {
      link: "https://twitter.com/frustrabe",
      icon: "fa-brands fa-x-twitter",
      label: "twitter",
      altText: "Twitter",
    },
    {
      link: "https://www.youtube.com/@frustrabe",
      icon: "fa-brands fa-youtube",
      label: "youtube",
      altText: "Youtube",
    },
    {
      link: "https://steamcommunity.com/id/frustrabe",
      icon: "fa-brands fa-steam",
      label: "steam",
      altText: "Steam",
    },
  ],
  bio: "hi there! i'm a recent web development bachelor graduate looking for a full time employment. my most recent position was part as a part-time junior software developer at a radio tracking startup. i am a big fan of music. i enjoy walking and running outdoors and i have a soft spot for sceneries.",
  skills: {
    experienceWith: [
      "html5",
      "css3",
      "javascript",
      "typescript",
      "reactjs",
      "angular",
      "mongodb",
      "git",
      "github",
      "gitlab",
    ],
    exposedTo: [
      "nodejs",
      "postgres",
      "nestjs",
      "typeorm",
      "rxjs",
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
      label: "cs2",
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
      title: "Artwork generator",
      live: "https://frustrabe.github.io/geometric-art-generator/",
      source: "https://github.com/frustrabe/geometric-art-generator",
      image: mock7,
    },
    {
      title: "Matching numbers",
      live: "https://frustrabe.github.io/javascript-version/",
      source: "https://github.com/frustrabe/javascript-version",
      image: mock6,
    },
    {
      title: "Portfolio",
      live: "http://fornerlukas.com/",
      source: "https://github.com/frustrabe/projects",
      image: mock5,
    },
    {
      title: "Daos Tutti ",
      video: "https://youtu.be/bsF38Hl2TzY",
      source: "https://github.com/frustrabe/devOps-daos",
      image: mock1,
    },
    {
      title: "Number counter",
      live: "https://frustrabe.github.io/vanilla-js-number-counter/",
      source: "https://github.com/frustrabe/vanilla-js-number-counter",
      image: mock2,
    },
    {
      title: "Color generator",
      live: "https://frustrabe.github.io/vanilla-js-color-generator/index.html",
      source: "https://github.com/frustrabe/vanilla-js-color-generator",
      image: mock3,
    },
    {
      title: "Search through",
      live: "https://frustrabe.github.io/robots/",
      source: "https://github.com/frustrabe/robots",
      image: mock4,
    },
  ],
};
