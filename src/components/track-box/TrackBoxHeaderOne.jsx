import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../style/trackBoxHeaderOne.css";
// import { auth } from "../../firebase";
// import { useStateValue } from "../../providers/StateProvider";

export default function TrackBoxHeaderOne() {
  return (
    <div>
      <header id="header-track">
        <NavLink className="nav-link" to="/">
          <h1 className="title">My Weekly Study Tracker</h1>
        </NavLink>
      </header>
    </div>
  );
}
