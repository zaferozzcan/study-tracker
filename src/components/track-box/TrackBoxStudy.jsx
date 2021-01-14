import React, { useState } from "react";
import "../../style/trackBoxUp.css";
import { useStateValue } from "../../providers/StateProvider";

export default function TrackBoxStudy() {
  const [xhange1, setXhange1] = useState("❌");
  const [xhange2, setXhange2] = useState("❌");
  const [xhange3, setXhange3] = useState("❌");
  const [xhange4, setXhange4] = useState("❌");
  const [xhange5, setXhange5] = useState("❌");
  const [xhange6, setXhange6] = useState("❌");
  const [xhange7, setXhange7] = useState("❌");
  const [{ study }] = useStateValue();
  console.log(study);
  return (
    <div className="track-box-up">
      <div className="track-box-up-col-title">
        {study ? study.studyName : "name"}
      </div>
      <div className="track-box-up-container">
        <div className="track-box-up-col">
          <span
            id="1"
            onClick={() =>
              xhange1 === "❌" ? setXhange1("✅") : setXhange1("❌")
            }
          >
            {xhange1}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="2"
            onClick={() =>
              xhange2 === "❌" ? setXhange2("✅") : setXhange2("❌")
            }
          >
            {xhange2}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="3"
            onClick={() =>
              xhange3 === "❌" ? setXhange3("✅") : setXhange3("❌")
            }
          >
            {xhange3}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="4"
            onClick={() =>
              xhange4 === "❌" ? setXhange4("✅") : setXhange4("❌")
            }
          >
            {xhange4}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="5"
            onClick={() =>
              xhange5 === "❌" ? setXhange5("✅") : setXhange5("❌")
            }
          >
            {xhange5}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="6"
            onClick={() =>
              xhange6 === "❌" ? setXhange6("✅") : setXhange6("❌")
            }
          >
            {xhange6}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="7"
            onClick={() =>
              xhange7 === "❌" ? setXhange7("✅") : setXhange7("❌")
            }
          >
            {xhange7}
          </span>
        </div>
      </div>
    </div>
  );
}
