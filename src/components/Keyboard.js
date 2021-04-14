import React from "react";
import "./Keyboard.css";

const keyboard = ({ value, updateValue, type }) => {
  //   console.log(value);
  return (
    <div
      className={`button ${value === "0" ? "double" : ""} ${type || ""}`}
      onClick={updateValue(value)}
    >
      {value}
    </div>
  );
};
export default keyboard;
