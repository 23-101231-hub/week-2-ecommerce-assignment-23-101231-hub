import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className="food-top">
      <h3 className="food-title">{props.title}</h3>
      <span className="food-price">{props.price}</span>
      
    </div>
  );
};

export default Card;