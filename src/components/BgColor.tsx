import React from "react";
import "../App.css";

interface BgColorProps {
  getColor: (color: string) => void;
}

const BgColor: React.FC<BgColorProps> = ({ getColor }) => {
  const genRanColor = () => {
    let colorCode = "";
    colorCode += Math.floor(Math.random() * 127 + 110).toString(16);
    colorCode += Math.floor(Math.random() * 127 + 110).toString(16);
    colorCode += Math.floor(Math.random() * 127 + 110).toString(16);
    return colorCode;
  };
  const handleBgColor = () => {
    getColor(`#${genRanColor()}`);
  };
  const handleGradient = () => {
    const color1 = `#${genRanColor()}`;
    const color2 = `#${genRanColor()}`;
    const color3 = `#${genRanColor()}`;
    const gradients = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
    getColor(gradients);
  };

  return (
    <>
      {/* background color picking zone */}
      <div className="panel-container panel-first">
        <div className="heading">Background-color</div>
        <div className="buttons-container">
          <button onClick={handleBgColor} className="panel-button">
            random color
          </button>
          <button onClick={handleGradient} className="panel-button">
            random gradient
          </button>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default BgColor;
