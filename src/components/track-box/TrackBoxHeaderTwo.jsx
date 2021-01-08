import React from "react";
import { Table } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import "../../style/trackBoxHeaderTwo.css";
// import { auth } from "../../firebase";
// import { useStateValue } from "../../providers/StateProvider";

export default function TrackBoxHeaderTwo() {
  return (
    <div>
      <header id="header-track-two">
        {/* <NavLink className="nav-link" to="/">
          <h1 className="title">Studies</h1>
        </NavLink> */}
        <div className="nav-link">
          <h1 className="title">Studies</h1>
        </div>
        <div className="study-track-two-days">
          <table>
            <thead></thead>
            <tbody>
              <tr className="study-track-two-days-row">
                <div className="study-track-data">
                  <td className="study-track-td">Sunday</td>
                </div>
                <div className="study-track-data">
                  <td className="study-track-td">Monday</td>
                </div>
                <div className="study-track-data">
                  <td className="study-track-td">Tuesday</td>
                </div>
                <div className="study-track-data">
                  <td className="study-track-td">Wednesday</td>
                </div>
                <div className="study-track-data">
                  <td className="study-track-td">Thursday</td>
                </div>
                <div className="study-track-data">
                  <td className="study-track-td">Friday</td>
                </div>
                <div className="study-track-data">
                  <td className="study-track-td">Saturday</td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}
