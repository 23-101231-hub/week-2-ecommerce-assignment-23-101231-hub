import React, { useState } from "react";
import "./Btn.css";
import img3 from "../assets/Icon.png";

const Btn = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="food-bottom">
      <div className="qty">
        <button className="qty-btn" onClick={decrease} type="button">
          −
        </button>

        <span className="qty-num">{count}</span>

        <button className="qty-btn" onClick={increase} type="button">
          +
        </button>
      </div>

      <button className="buy" type="button">
        <img src={img3} alt="cart icon" />
        Buy Now
      </button>
    </div>
  );
};

export default Btn;