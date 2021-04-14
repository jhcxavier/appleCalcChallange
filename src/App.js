/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import { key } from "../src/utilities";
function App() {
  const [value, setValue] = useState("0");
  const [temp, setTemp] = useState(null);
  const [ac, setAc] = useState("AC");
  const [operation, setOperation] = useState(null);
  const getResult = (temp, value, operation) => {
    value = parseFloat(value);
    if (operation === "+") {
      value = (temp + value).toString();

      return value;
    } else if (operation === "-") {
      value = (temp - value).toString();

      return value;
    } else if (operation === "÷") {
      value = (temp / value).toString();

      return value;
    } else if (operation === "×") {
      value = (temp * value).toString();

      return value;
    }

    return (temp + parseFloat(value)).toString();
  };

  const updateValue = (key) => () => {
    // setTemp(value);
    if (value === "0" && key !== "AC" && key !== "+/-" && key !== "%") {
      setValue(key);
      return;
    }
    if (key === "AC" || key === "C") {
      setValue("0");
      setTemp(null);
      return;
    }
    if (key === "+/-") {
      setValue((parseFloat(value) * -1).toString());
      return;
    }
    if (key === "%" && value !== "0") {
      setValue((parseFloat(value) / 100).toString());
      setTemp(null);
      return;
    }
    if (key === "+") {
      setTemp(parseFloat(value));
      setValue("0");
      setOperation("+");
      return;
    }
    if (key === "-") {
      setTemp(parseFloat(value));
      setValue("0");
      setOperation("-");
      return;
    }
    if (key === "÷") {
      setTemp(parseFloat(value));
      setValue("0");
      setOperation("÷");
      return;
    }
    if (key === "×") {
      setTemp(parseFloat(value));
      setValue("0");
      setOperation("×");
      return;
    }
    if (key === "=") {
      setValue(getResult(temp, value, operation));
      return;
    }
    setValue(parseFloat(parseFloat(value) + key).toString());
  };
  const updateKeyAc = (e) => {
    e = ac;
    return e;
  };
  useEffect(() => {
    if (value === "0") {
      setAc("AC");
    } else {
      setAc("C");
    }
  }, [value]);
  return (
    <div>
      <div className="App">
        <div className="top">
          <div className="dots"></div>
          <div className="dots" id="yellow"></div>
          <div className="dots" id="green"></div>
        </div>
        <div className="input" value={value}>
          {value}
        </div>
        <div className="keyboard">
          {key.map((e, index) => {
            const options1 = e === "AC" || e === "+/-" || e === "%";
            const options2 =
              e === "÷" || e === "×" || e === "-" || e === "+" || e === "=";
            if (options1) {
              return (
                <Keyboard
                  key={index}
                  value={e === "AC" || e === "C" ? (e = ac) : e}
                  updateValue={updateValue}
                  type="firstThree"
                />
              );
            } else if (options2) {
              return (
                <Keyboard
                  key={index}
                  value={e}
                  updateValue={updateValue}
                  type="lastColumn"
                />
              );
            } else {
              return (
                <Keyboard key={index} value={e} updateValue={updateValue} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
