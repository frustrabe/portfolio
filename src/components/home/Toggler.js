import React from "react";
import { Box } from "@mui/material";
import styles from "./Home.module.scss";

export default function Toggler({ darkMode, handleClick }) {
  return (
    <Box
      className={styles.linkHover}
      cursor={"pointer"}
      sx={{
        cursor: "pointer",
      }}
    >
      {darkMode ? (
        <span onClick={handleClick} aria-label="light-mode" role="img">
          ☀
        </span>
      ) : (
        <span onClick={handleClick} aria-label="dark-mode" role="img">
          ☾
        </span>
      )}
    </Box>
  );
}
