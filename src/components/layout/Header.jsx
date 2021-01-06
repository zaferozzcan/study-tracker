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
      <NavLink className="nav-link" to="/">
        <h1 className="title">Study Tracker</h1>
      </NavLink>

      {user ? (
        <div className="header-right-elements">
          <p className="header-greeting">Hello,{`${user.email}`}</p>
          <NavLink className="nav-link" to="/" onClick={hanleSignOut}>
            SignOut
          </NavLink>
        </div>
      ) : (
        <div className="header-right-elements">
          <NavLink className="nav-link" to="/user/signin">
            Sign In
          </NavLink>
        </div>
      )}
    </header>
  );
}
