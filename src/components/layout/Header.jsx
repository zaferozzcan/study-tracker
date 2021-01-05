import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/header.css";
import { auth } from "../../firebase";

export default function Header() {
  function hanleSignOut() {
    auth.signOut();
  }
  return (
    <header id="header">
      <NavLink to="/">
        <h1 className="title">Study Tracker</h1>
      </NavLink>
      {auth ? (
        <button onClick={hanleSignOut}>SignOut</button>
      ) : (
        "sign in please"
      )}
    </header>
  );
}
