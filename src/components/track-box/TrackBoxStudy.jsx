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

  function handleDelete(id) {
    db.collection("studies").doc(props.id).delete();
    props.del(id);
  }

  return (
    <div className="track-box-up">
      <Button
        onClick={() => handleDelete(props.index)}
        type="button"
        variant="danger"
      >
        X
      </Button>
      <div className="track-box-up-col-title">{props.data.name}</div>
      <div className="track-box-up-container">
        <div className="track-box-up-col">
          <span
            id="1"
            onClick={() => {
              xhange1 === false ? setXhange1(true) : setXhange1(false);
              db.collection("studies")
                .doc(props.id)
                .update({
                  days: {
                    sunday: !xhange1,
                    monday: xhange2,
                    tuesday: xhange3,
                    wednesday: xhange4,
                    thursday: xhange5,
                    friday: xhange6,
                    saturday: xhange7,
                  },
                });
            }}
          >
            {xhange1 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="2"
            onClick={() => {
              xhange2 === false ? setXhange2(true) : setXhange2(false);
              db.collection("studies")
                .doc(props.id)
                .update({
                  days: {
                    sunday: xhange1,
                    monday: !xhange2,
                    tuesday: xhange3,
                    wednesday: xhange4,
                    thursday: xhange5,
                    friday: xhange6,
                    saturday: xhange7,
                  },
                });
            }}
          >
            {xhange2 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="3"
            onClick={() => {
              xhange3 === false ? setXhange3(true) : setXhange3(false);
              db.collection("studies")
                .doc(props.id)
                .update({
                  days: {
                    sunday: xhange1,
                    monday: xhange2,
                    tuesday: !xhange3,
                    wednesday: xhange4,
                    thursday: xhange5,
                    friday: xhange6,
                    saturday: xhange7,
                  },
                });
            }}
          >
            {xhange3 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="4"
            onClick={() => {
              xhange4 === false ? setXhange4(true) : setXhange4(false);
              db.collection("studies")
                .doc(props.id)
                .update({
                  days: {
                    sunday: xhange1,
                    monday: xhange2,
                    tuesday: xhange3,
                    wednesday: !xhange4,
                    thursday: xhange5,
                    friday: xhange6,
                    saturday: xhange7,
                  },
                });
            }}
          >
            {xhange4 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="5"
            onClick={() => {
              xhange5 === false ? setXhange5(true) : setXhange5(false);
              db.collection("studies")
                .doc(props.id)
                .update({
                  days: {
                    sunday: xhange1,
                    monday: xhange2,
                    tuesday: xhange3,
                    wednesday: xhange4,
                    thursday: !xhange5,
                    friday: xhange6,
                    saturday: xhange7,
                  },
                });
            }}
          >
            {xhange5 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="6"
            onClick={() => {
              xhange6 === false ? setXhange6(true) : setXhange6(false);
              db.collection("studies")
                .doc(props.id)
                .update({
                  days: {
                    sunday: xhange1,
                    monday: xhange2,
                    tuesday: xhange3,
                    wednesday: xhange4,
                    thursday: xhange5,
                    friday: !xhange6,
                    saturday: xhange7,
                  },
                });
            }}
          >
            {xhange6 ? "✅" : "❌"}
          </span>
        </div>
        <div className="track-box-up-col">
          <span
            id="7"
            onClick={() => {
              xhange7 === false ? setXhange7(true) : setXhange7(false);
              db.collection("studies")
                .doc(props.id)
                .update({
                  days: {
                    sunday: xhange1,
                    monday: xhange2,
                    tuesday: xhange3,
                    wednesday: xhange4,
                    thursday: xhange5,
                    friday: xhange6,
                    saturday: !xhange7,
                  },
                });
            }}
          >
            {xhange7 ? "✅" : "❌"}
          </span>
        </div>
      </div>
    </div>
  );
}
