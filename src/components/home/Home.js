import React from "react";
import Style from "./Home.module.scss";
import me from "../../img/self.avif";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info, warmColor } from "../../info/Info";
// import Particles from "react-particles";

export default function Home({ darkMode }) {
  // const particlesOptions = {
  //   particles: {
  //     number: {
  //       value: 20,
  //     },
  //     color: {
  //       value: "#ffffff",
  //     },
  //     shape: {
  //       type: "circle",
  //     },
  //     opacity: {
  //       value: 0.5,
  //     },
  //     size: {
  //       value: 3,
  //     },
  //     line_linked: {
  //       enable: false,
  //     },
  //     move: {
  //       enable: true,
  //       speed: 6,
  //     },
  //   },
  // };

  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      {/* <Particles id="tsparticles" options={particlesOptions} /> */}
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={"image of developer"}
        style={{ background: info.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box
        style={{
          borderRadius: "1rem",
          background: darkMode
            ? "rgba(0, 0, 0, 0.2)"
            : "rgba(255, 255, 255, 0.2)",
          boxShadow: darkMode
            ? "0 0 10px 0 rgba(0, 0, 0, 0.2)"
            : "0 0 10px 0 rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          padding: "1rem 2rem",
          transition: "all 0.3s ease",
        }}
      >
        <h1>
          hi, i'm{" "}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.firstName + " " + info.lastName + " "}
          </span>
          <span className={Style.hand}>👋🏼</span>
        </h1>
        <h2>
          a {info.position}{" "}
          <a
            href="https://www.warmmusic.net/"
            style={{
              background: warmColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.company}
          </a>
        </h2>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
