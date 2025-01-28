import React from "react";
import Style from "./Home.module.scss";
import me from "../../img/self3.avif";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

const getSharedBoxStyles = (darkMode) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "1rem",
  borderRadius: "1rem",
  background: darkMode ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)",
  boxShadow: darkMode
    ? "0 0 10px 0 rgba(0, 0, 0, 0.2)"
    : "0 0 10px 0 rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
});

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
        p={"0.25rem"}
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
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1.5rem"}
        >
          <Box style={getSharedBoxStyles(darkMode)}>
            <h3>professional</h3>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              flexDirection={"row"}
              justifyContent={"center"}
              fontSize={{ xs: "1.25rem", md: "2rem" }}
            >
              {info.professionalSocials.map((social, index) => (
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
          <Box style={getSharedBoxStyles(darkMode)}>
            <h3>other</h3>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              flexDirection={"row"}
              justifyContent={"center"}
              fontSize={{ xs: "1.25rem", md: "2rem" }}
            >
              {info.otherSocials.map((social, index) => (
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
      </Box>
    </Box>
  );
}
