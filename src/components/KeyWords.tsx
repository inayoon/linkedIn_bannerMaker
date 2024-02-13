import React, { useState } from "react";

const KeyWords = () => {
  const initialState = {
    size: "",
    type: "",
    text: "",
  };
  const [keyword, setKeyword] = useState(initialState);
  const handleSize = (px: string) => {
    setKeyword((prev) => ({
      ...prev,
      size: px,
    }));
  };
  const handleType = (style: string) => {
    setKeyword((prev) => ({
      ...prev,
      type: style,
    }));
  };
  const handleText = (e: any) => {
    const { name, value } = e.target;
    setKeyword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(keyword);
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
              keyword.type === "fill" ? "bold-text" : ""
            }`}
          >
            Fill
          </button>
          <button
            onClick={() => handleType("border")}
            className={`panel-button border ${
              keyword.type === "border" ? "bold-text" : ""
            }`}
          >
            Border
          </button>
          <button
            onClick={() => handleType("message")}
            className={`panel-button size message ${
              keyword.type === "message" ? "bold-text" : ""
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
