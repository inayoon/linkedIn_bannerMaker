import { useState, useEffect } from "react";
import "./App.css";
import BgColor from "./components/BgColor";
import KeyWords from "./components/KeyWords";

function App() {
  const [bgStyle, setBgStyle] = useState("");
  const getColor = (style: string) => {
    setBgStyle(style);
  };

  return (
    <div className="big-container">
      <div className="white-container">
        <h1>#LinkedIn Background Banner Maker</h1>
        <div className="dynamic-banner" style={{ background: bgStyle }}>
          <div className="user-image"></div>
          <div style={{ fontSize: "22px" }}></div>
        </div>
        <BgColor getColor={getColor} />
        <KeyWords />
      </div>
    </div>
  );
}

export default App;
