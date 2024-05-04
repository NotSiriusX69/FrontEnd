import React from "react";

const InputBox = ({ type, placeholder, name, value, onChange, class_name }) => {
  const className = `input-box ${class_name}`;
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputBox;
