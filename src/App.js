import React from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
function App() {
  return (
    <div>
      <div className="App">
        <div className="top">
          <div className="dots"></div>
          <div className="dots" id="yellow"></div>
          <div className="dots" id="green"></div>
        </div>
        <div className="input">0</div>
        <div className="keyboard">
          <Keyboard value="AC" type="firstThree" />
          <Keyboard value="+/-" type="firstThree" />
          <Keyboard value="%" type="firstThree" />
          <Keyboard value="÷" type="lastColumn" />
          <Keyboard value="7" />
          <Keyboard value="8" />
          <Keyboard value="9" />
          <Keyboard value="×" type="lastColumn" />
          <Keyboard value="4" />
          <Keyboard value="5" />
          <Keyboard value="6" />
          <Keyboard value="-" type="lastColumn" />
          <Keyboard value="1" />
          <Keyboard value="2" />
          <Keyboard value="3" />
          <Keyboard value="+" type="lastColumn" />
          <Keyboard value="0" />
          <Keyboard value="." />
          <Keyboard value="=" type="lastColumn" />
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
