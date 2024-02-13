import { useState, useEffect } from "react";
import "./App.css";
import BgColor from "./components/BgColor";
import KeyWords from "./components/KeyWords";

export type Text = {
  size: string;
  style: string;
  text: string;
};
const App: React.FC = () => {
  const [bgStyle, setBgStyle] = useState("");
  const [keywords, setKeywords] = useState<Text[]>([]);
  const getColor = (style: string) => {
    setBgStyle(style);
  };
  const getText = (contents: Text) => {
    setKeywords((prevKeywords) => [...prevKeywords, contents]);
  };

  return (
    <div className="big-container">
      <div className="white-container">
        <h1>#LinkedIn Background Banner Maker</h1>
        <div className="dynamic-banner" style={{ background: bgStyle }}>
          <div className="user-image"></div>
          {keywords.map((keyword, index) => (
            <span key={index} style={{ fontSize: keyword.size }}>
              {keyword.text}
            </span>
          ))}
        </div>
        <BgColor getColor={getColor} />
        <KeyWords getText={getText} />
      </div>
    </div>
  );
};

export default App;
