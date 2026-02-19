import React from "react";
import "./Footer.css";

const Icon = (props) => {
  return (
    <a href={props.link} aria-label={props.label}>
      {props.icon}
    </a>
  );
};

export default Icon;