import { useState } from "react";
import html2canvas from "html2canvas";
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
  const handleReset = () => {
    setKeywords([]);
  };
  const handleImage = async () => {
    const target: HTMLElement | null =
      document.querySelector(".dynamic-banner");

    if (target) {
      try {
        const canvas = await html2canvas(target);
        const imageUri = canvas.toDataURL("image/png");
        downloadURI(imageUri, "banner.png");
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
  };

  const downloadURI = (uri: string, name: string) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="big-container">
      <div className="white-container">
        <h1>#LinkedIn Background Banner Maker</h1>
        <div className="dynamic-banner" style={{ background: bgStyle }}>
          <div className="user-image" data-html2canvas-ignore="true"></div>
          <div className="dynamic-contents">
            {keywords.map((keyword, index) => (
              <span
                className={`${keyword.size} ${keyword.style} dynamic-keyword`}
                key={index}
              >
                {keyword.text}
              </span>
            ))}
          </div>
        </div>
        <BgColor getColor={getColor} />
        <KeyWords getText={getText} />
        <div className="button-box">
          <button onClick={handleReset} className="panel-button btn">
            Reset
          </button>
          <button onClick={handleImage} className="panel-button btn">
            Image Download{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
