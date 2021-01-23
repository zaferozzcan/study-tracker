import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../style/studyTrack.css";
// import { auth } from "../../firebase";
import { useStateValue } from "../../providers/StateProvider";

export default function StudyTrack() {
  const { study } = useStateValue();

  return (
    <div className="study-tracker-container">
      <header id="study-track-two">
        {/* <NavLink className="nav-link" to="/">
          <h1 className="title">Studies</h1>
        </NavLink> */}
        <div className="nav-link">
          <h1 className="title-study-tracker">{study.studyName}/</h1>
        </div>
        <div className="study-track-two-days">
          <table>
            <thead></thead>
            <tbody>
              <tr className="study-track-two-days-row">
                <div className="study-track-data">
                  <td>X</td>
                </div>
                <div className="study-track-data">
                  <td>X</td>
                </div>
                <div className="study-track-data">
                  <td>X</td>
                </div>
                <div className="study-track-data">
                  <td>X</td>
                </div>
                <div className="study-track-data">
                  <td>X</td>
                </div>
                <div className="study-track-data">
                  <td>X</td>
                </div>
                <div className="study-track-data">
                  <td>X</td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}
