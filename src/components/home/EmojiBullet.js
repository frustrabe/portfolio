import React from "react";
import { Box } from "@mui/material";
import { warmColor } from "../../info/Info";
import styles from "./Home.module.scss";

function EmojiBullet(props) {
  const { emoji, text, link } = props;

  return (
    <Box
      component={"li"}
      fontSize={"1rem"}
      lineHeight={2}
      style={{ cursor: "default" }}
    >
      <Box
        component={"span"}
        aria-label="cheese"
        role="img"
        mr={{ xs: "0.5rem", md: "1rem" }}
        fontSize={"1.5rem"}
      >
        {emoji}
      </Box>
      {text}{" "}
      {link && (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkHover}
          style={{ textDecoration: "none", color: warmColor }}
        >
          {link.text}
        </a>
      )}
    </Box>
  );
}

export default EmojiBullet;
