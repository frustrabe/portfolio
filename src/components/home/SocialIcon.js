import React from "react";
import { Tooltip } from "@mui/material";

function SocialIcon(props) {
  const { link, icon, label, altText } = props;
  return (
    <Tooltip title={altText} arrow>
      <a
        target="_blank"
        aria-label={label}
        rel="noopener noreferrer"
        href={link}
      >
        <i className={icon} aria-hidden="true" />
      </a>
    </Tooltip>
  );
}

export default SocialIcon;
