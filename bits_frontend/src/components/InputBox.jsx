import React from "react";

const InputBox = ({ type, placeholder, name, value }) => {
  return (
    <input className="input-box" type={type} placeholder={placeholder} name={name} value={value} />
  );
};

export default InputBox;
