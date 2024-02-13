import React, { useState, useEffect } from "react";
import { Text } from "../App";

interface KeywordsProps {
  getText: (type: Text) => void;
}

const KeyWords: React.FC<KeywordsProps> = ({ getText }) => {
  const initialState = {
    size: "",
    style: "",
    text: "",
  };
  const [keyword, setKeyword] = useState(initialState);

  useEffect(() => {
    getText(keyword);
  }, [keyword]);

  const handleSize = (px: string) => {
    setKeyword((prev) => ({
      ...prev,
      size: px,
    }));
  };
  const handleType = (style: string) => {
    setKeyword((prev) => ({
      ...prev,
      style: style,
    }));
  };
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setKeyword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      {/* keyword size picking zone */}
      <div className="panel-container panel-second">
        <div className="heading">Keyword-size</div>
        <div className="buttons-container">
          <button
            onClick={() => handleSize("42px")}
            className={`panel-button size ${
              keyword.size === "42px" ? "bold-text" : ""
            }`}
          >
            2XL
          </button>
          <button
            onClick={() => handleSize("32px")}
            className={`panel-button size ${
              keyword.size === "32px" ? "bold-text" : ""
            }`}
          >
            Md
          </button>
          <button
            onClick={() => handleSize("22px")}
            className={`panel-button size ${
              keyword.size === "22px" ? "bold-text" : ""
            }`}
          >
            Sm
          </button>
        </div>
      </div>

      {/* keyword-type picking zone */}
      <div className="panel-container panel-third">
        <div className="heading">Keyword-type</div>
        <div className="buttons-container">
          <button
            onClick={() => handleType("fill")}
            className={`panel-button fill ${
              keyword.style === "fill" ? "bold-text" : ""
            }`}
          >
            Fill
          </button>
          <button
            onClick={() => handleType("border")}
            className={`panel-button border ${
              keyword.style === "border" ? "bold-text" : ""
            }`}
          >
            Border
          </button>
          <button
            onClick={() => handleType("message")}
            className={`panel-button size message ${
              keyword.style === "message" ? "bold-text" : ""
            }`}
          >
            MSG
          </button>
        </div>
      </div>
      <div className="line"></div>

      {/* input zone */}
      <div className="panel-container panel-second">
        <div className="buttons-container">
          <input
            onChange={handleText}
            className="input-field"
            type="text"
            name="text"
            value={keyword.text}
            placeholder="Enter your keywords"
          />
          {/* 
          <input
            className="input-field"
            type="text"
            placeholder="Second-line keywords"
          />

          <input
            className="input-field"
            type="text"
            placeholder="Last line keywords"
          /> */}
        </div>
      </div>
    </>
  );
};

export default KeyWords;
