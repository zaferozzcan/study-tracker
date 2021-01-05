import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../style/header.css";
import { auth } from "../../firebase";
import { useStateValue } from "../../providers/StateProvider";

export default function Header() {
  const history = useHistory();
  const [{ user }] = useStateValue();
  function hanleSignOut() {
    auth.signOut();
    history.push("/");
  }
  return (
    <header id="header">
      <NavLink to="/">
        <h1 className="title">Study Tracker</h1>
      </NavLink>

      {user ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Hello,{`${user.email}`}-_-</p>
          <span></span>
          <br />
          <NavLink to="/" onClick={hanleSignOut}>
            SignOut
          </NavLink>
        </div>
      ) : (
        <NavLink to="/user/signin">Sign In</NavLink>
      )}
    </header>
  );
}
