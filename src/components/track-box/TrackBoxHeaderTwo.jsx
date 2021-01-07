import React from "react";
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
        <div className="header-track-two-days">
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Sunday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Monday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Tuesday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Wednesday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Thursday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Friday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Saturday</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}
