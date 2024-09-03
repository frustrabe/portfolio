import React from "react";
import Style from "./Home.module.scss";
import me from "../../img/self3.avif";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({ darkMode }) {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
      padding={{ xs: "0.75rem", md: "2rem" }} // padding for mobile
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        style={{ background: info.gradient }}
        width={{ xs: "30vh", sm: "35vh", md: "40vh" }} // pic on different screen sizes
        height={{ xs: "30vh", sm: "35vh", md: "40vh" }} // pic on different screen sizes
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: "1.5rem", md: 0 }}
        mr={{ xs: 0, md: "2rem" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img
          src={me}
          alt="me, Lukas"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </Box>
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
          padding: "1.25rem 0.75rem", // padding for mobile
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
        <h2>a {info.workTitle} </h2>
        <Box component={"ul"} p={"0.8rem"} m={0}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet
              key={index}
              emoji={bio.emoji}
              text={bio.text}
              link={bio.link}
            />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"0.75rem"}
          flexDirection={"row"}
          justifyContent={"center"}
          fontSize={{ xs: "1.25rem", md: "2rem" }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
              altText={social.altText}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
