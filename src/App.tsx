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
  const [text, setText] = useState<Text>({ size: "", style: "", text: "" });
  const getColor = (style: string) => {
    setBgStyle(style);
  };
  const getText = (contents: Text) => {
    setText(contents);
  };
  console.log(text);

  return (
    <div className="big-container">
      <div className="white-container">
        <h1>#LinkedIn Background Banner Maker</h1>
        <div className="dynamic-banner" style={{ background: bgStyle }}>
          <div className="user-image"></div>
          <div style={{ fontSize: "22px" }}></div>
        </div>
        <BgColor getColor={getColor} />
        <KeyWords getText={getText} />
      </div>
    </div>
  );
};

export default App;
