import React from "react";

const Button = ({ color, text, func }) => {
  const btnClass = `button ${color}`;
  return (
    <button className={btnClass} onClick={func}>
      <p className="text-base font-light m-auto">{text}</p>
    </button>
  );
};

export default Button;
