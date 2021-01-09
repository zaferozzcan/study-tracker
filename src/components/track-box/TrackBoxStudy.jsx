import React, { useState } from "react";
import "../../style/trackBoxUp.css";

export default function TrackBoxStudy() {
  const [xhange, setXhange] = useState("X");
  function handleClick() {
    xhange === "X" ? setXhange("✅") : setXhange("X");
  }
  console.log("X", xhange);
  return (
    <div className="track-box-up">
      <div className="track-box-up-col-title">Days</div>
      <div className="track-box-up-container">
        <div className="track-box-up-col">
          <span onClick={handleClick}>X</span>
        </div>
        <div className="track-box-up-col">
          <span onClick={handleClick}>X</span>
        </div>
        <div className="track-box-up-col">
          <span onClick={handleClick}>X</span>
        </div>
        <div className="track-box-up-col">
          <span onClick={handleClick}>X</span>
        </div>
        <div className="track-box-up-col">
          <span onClick={handleClick}>X</span>
        </div>
        <div className="track-box-up-col">
          <span onClick={handleClick}>X</span>
        </div>
        <div className="track-box-up-col">
          <span onClick={handleClick}>X</span>
        </div>
      </div>
    </div>
  );
}
