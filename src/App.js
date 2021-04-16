/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import { key, numberWithCommas } from "../src/utilities";

function App() {
  const [value, setValue] = useState("0");
  const [temp, setTemp] = useState(null);
  const [ac, setAc] = useState("AC");
  const [operation, setOperation] = useState(null);
  const [inputSize, setInputSize] = useState("60");
  let styles = {
    input: {
      fontSize: `${inputSize}px`,
    },
  };

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
    if (value === "0" && key !== "AC" && key !== "+/-" && key !== "%") {
      setValue(key);
      return;
    }
    if (key === "AC" || key === "C") {
      setValue("0");
      setInputSize("60");
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
    if (value.length >= 9 && key === "+/-") {
      setValue((parseFloat(value) * -1).toString());
      return;
    } else if (value.length >= 9) {
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
    if (key === ".") {
      if (value.includes(key)) {
        return;
      }
      setValue(value + ".");
      return;
    }
    if (value.substr(-1) === ".") {
      setValue(value + key);
    } else {
      setValue(parseFloat(parseFloat(value) + key).toString());
    }
  };

  useEffect(() => {
    if (value === "0") {
      setAc("AC");
    } else {
      setAc("C");
    }
    let inputLength = document.querySelector(".input").innerHTML.length;
    if (inputLength > 7) {
      setInputSize("55");
    }
    if (inputLength > 9) {
      setInputSize("50");
    }
    if (inputLength >= 10) {
      setInputSize("48");
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
        <div className="input" value={value} style={styles.input}>
          {numberWithCommas(value)}
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
