import React from "react";
import "./Footer.css";
import img11 from "../assets/Arrow - Right 2.png";

const Footertext = (props) => {
  return (
    <a href={props.link}>
      <img src={img11} alt="arrow icon" />
      {props.text}
    </a>
  );
};

export default Footertext;