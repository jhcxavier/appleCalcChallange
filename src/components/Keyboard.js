import React from "react";
import "./Keyboard.css";

const keyboard = ({ value }) => {
  return (
    <div className={`button ${value === "0" ? "double" : ""}`}>{value}</div>
  );
};
export default keyboard;
