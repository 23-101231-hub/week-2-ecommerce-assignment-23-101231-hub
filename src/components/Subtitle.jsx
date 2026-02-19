import React from 'react';
import "./Subtitle.css";

const Subtitle = (props) => {
  return (
    <p className="food-desc">
      {props.text}
    </p>
  );
};

export default Subtitle;