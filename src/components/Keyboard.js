import React from "react";
import "./Keyboard.css";

const keyboard = ({ value, type }) => {
  return (
    <div className={`button ${value === "0" ? "double" : ""} ${type || ""}`}>
      {value}
    </div>
  );
};
export default keyboard;
