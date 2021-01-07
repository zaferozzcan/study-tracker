import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../style/trackBoxHeaderOne.css";
// import { auth } from "../../firebase";
// import { useStateValue } from "../../providers/StateProvider";

export default function TrackBoxHeaderOne() {
  //   const history = useHistory();
  //   const [{ user }] = useStateValue();
  //   function hanleSignOut() {
  //     auth.signOut();
  //     history.push("/");
  //   }

  //   let location = window.location.href;
  //   let includesAuth =
  //     location.includes("signin") || location.includes("register");

  return (
    // <header id="header">
    //   <NavLink className="nav-link" to="/">
    //     <h1 className="title">Study Tracker</h1>
    //   </NavLink>

    //   {user ? (
    //     <div className="header-right-elements">
    //       <p className="header-greeting">Hello,{`${user.email}`}</p>
    //       <NavLink className="nav-link" to="/" onClick={hanleSignOut}>
    //         {!includesAuth ? "SignOut" : null}
    //       </NavLink>
    //     </div>
    //   ) : (
    //     <div className="header-right-elements">
    //       <NavLink className="nav-link" to="/user/signin">
    //         {!includesAuth ? "SignIn" : null}
    //       </NavLink>
    //     </div>
    //   )}
    // </header>
    //);
    <div>
      <header id="header-track">
        <NavLink className="nav-link" to="/">
          <h1 className="title">My Weekly Study Tracker</h1>
        </NavLink>
      </header>
    </div>
  );
}
