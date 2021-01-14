import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style/trackBoxUp.css";

export default function TrackBoxUp() {
  return (
    <div className="track-box-up">
      <div className="track-box-up-col-title">⚡️</div>
      <div className="track-box-up-container">
        <div className="track-box-up-col">
          <span>Sunday</span>
        </div>
        <div className="track-box-up-col">
          <span>Monday</span>
        </div>
        <div className="track-box-up-col">
          <span>Tuesday</span>
        </div>
        <div className="track-box-up-col">
          <span>Wednesday</span>
        </div>
        <div className="track-box-up-col">
          <span>Thursday</span>
        </div>
        <div className="track-box-up-col">
          <span>Friday</span>
        </div>
        <div className="track-box-up-col">
          <span>Saturday</span>
        </div>
      </div>
    </div>
  );
}
