import React, { useEffect, useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
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
      // console.log("test", test);
      return;
    }
    setValue(parseFloat(parseFloat(value) + key).toString());
    // setTemp(value);
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
          <Keyboard value={ac} updateValue={updateValue} type="firstThree" />
          <Keyboard value="+/-" updateValue={updateValue} type="firstThree" />
          <Keyboard value="%" updateValue={updateValue} type="firstThree" />
          <Keyboard value="÷" updateValue={updateValue} type="lastColumn" />
          <Keyboard value="7" updateValue={updateValue} />
          <Keyboard value="8" updateValue={updateValue} />
          <Keyboard value="9" updateValue={updateValue} />
          <Keyboard value="×" updateValue={updateValue} type="lastColumn" />
          <Keyboard value="4" updateValue={updateValue} />
          <Keyboard value="5" updateValue={updateValue} />
          <Keyboard value="6" updateValue={updateValue} />
          <Keyboard value="-" updateValue={updateValue} type="lastColumn" />
          <Keyboard value="1" updateValue={updateValue} />
          <Keyboard value="2" updateValue={updateValue} />
          <Keyboard value="3" updateValue={updateValue} />
          <Keyboard value="+" updateValue={updateValue} type="lastColumn" />
          <Keyboard value="0" updateValue={updateValue} />
          <Keyboard value="." updateValue={updateValue} />
          <Keyboard value="=" updateValue={updateValue} type="lastColumn" />
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
