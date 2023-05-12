import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
  const { image, live, source, title, video, darkMode } = props;
  return (
    <Box
      style={{
        borderRadius: "2rem",
        background: "grey",
        boxShadow: darkMode
          ? "0 0 10px 0 rgba(0, 0, 0, 0.2)"
          : "0 0 10px 0 rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        padding: "5rem 5rem",
        margin: "1rem",
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box component={"img"} src={image} alt={"mockup"} />
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        {live && (
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={live} title={"Live Demo"} icon={"fa fa-chrome"} />
          </Box>
        )}
        {video && (
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            {video && (
              <IconLink
                link={video}
                title={"Video Demo"}
                icon={"fa fa-youtube-play"}
              />
            )}
          </Box>
        )}
        {source && (
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
