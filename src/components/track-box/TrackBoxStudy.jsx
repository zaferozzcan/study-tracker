import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../style/trackBoxUp.css";
import { useStateValue } from "../../providers/StateProvider";
import { db } from "../../firebase";

export default function TrackBoxStudy(props) {
  const [xhange1, setXhange1] = useState(props.data.days.sunday);
  const [xhange2, setXhange2] = useState(props.data.days.monday);
  const [xhange3, setXhange3] = useState(props.data.days.tuesday);
  const [xhange4, setXhange4] = useState(props.data.days.wednesday);
  const [xhange5, setXhange5] = useState(props.data.days.thursday);
  const [xhange6, setXhange6] = useState(props.data.days.friday);
  const [xhange7, setXhange7] = useState(props.data.days.saturday);

  return (
    <div className="track-box-up">
      <form onSubmit={db.collection("studies").doc(props.id).delete()}>
        <Button type="submit" variant="danger">
          X
        </Button>
      </form>
      <div className="track-box-up-col-title">{props.data.name}</div>
      <div className="track-box-up-container">
        <div className="track-box-up-col">
          <span
            id="1"
            onClick={() =>
              xhange1 === false ? setXhange1(true) : setXhange1(false)
            }
          >
            {xhange1 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="2"
            onClick={() =>
              xhange2 === false ? setXhange2(true) : setXhange2(false)
            }
          >
            {xhange2 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="3"
            onClick={() =>
              xhange3 === false ? setXhange3(true) : setXhange3(false)
            }
          >
            {xhange3 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="4"
            onClick={() =>
              xhange4 === false ? setXhange4(true) : setXhange4(false)
            }
          >
            {xhange4 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="5"
            onClick={() =>
              xhange5 === false ? setXhange5(true) : setXhange5(false)
            }
          >
            {xhange5 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="6"
            onClick={() =>
              xhange6 === false ? setXhange6(true) : setXhange6(false)
            }
          >
            {xhange6 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="7"
            onClick={() =>
              xhange7 === false ? setXhange7(true) : setXhange7(false)
            }
          >
            {xhange7 ? "✅" : "❌"}
          </span>
        </div>
      </div>
    </div>
  );
}
