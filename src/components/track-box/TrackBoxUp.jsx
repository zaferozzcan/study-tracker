import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style/trackBoxUp.css";

export default function TrackBoxUp() {
  return (
    <div className="track-box-up">
      <div className="track-box-up-container">
        <div className="track-box-up-col-title">StudyItemName</div>
        <div className="track-box-up-col">Sunday</div>
        <div className="track-box-up-col">Monday</div>
        <div className="track-box-up-col">Tuesday</div>
        <div className="track-box-up-col">Wednesday</div>
        <div className="track-box-up-col">Thursday</div>
        <div className="track-box-up-col">Friday</div>
        <div className="track-box-up-col">Saturday</div>
      </div>
    </div>
  );
}
