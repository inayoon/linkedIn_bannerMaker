import { useState, useEffect } from "react";
import "./App.css";
import BgColor from "./components/BgColor";

function App() {
  const [bgColor, setBgColor] = useState("");
  const getColor = (color: string) => {
    setBgColor(color);
  };
  console.log(bgColor);

  return (
    <div className="big-container">
      <div className="white-container">
        <h1>#LinkedIn Background Banner Maker</h1>
        <div
          className="dynamic-banner"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className="user-image"></div>
        </div>

        {/* background color picking zone */}
        <BgColor getColor={getColor} />

        {/* keyword size picking zone */}
        <div className="panel-container panel-second">
          <div className="heading">Keyword-size</div>
          <div className="buttons-container">
            <button className="panel-button size">2XL</button>
            <button className="panel-button size">Md</button>
            <button className="panel-button size">Sm</button>
          </div>
        </div>

        {/* keyword-type picking zone */}
        <div className="panel-container panel-third">
          <div className="heading">Keyword-type</div>
          <div className="buttons-container">
            <button className="panel-button fill">Fill</button>
            <button className="panel-button border">Border</button>
            <div className="panel-button size message ">MSG</div>
          </div>
        </div>
        <div className="line"></div>
        {/* input zone */}
        <div className="panel-container panel-second">
          <div className="buttons-container">
            <input
              className="input-field"
              type="text"
              placeholder="First-line keywords"
            />

            <input
              className="input-field"
              type="text"
              placeholder="Second-line keywords"
            />

            <input
              className="input-field"
              type="text"
              placeholder="Last line keywords"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
