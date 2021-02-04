import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
