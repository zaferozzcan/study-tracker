import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../style/header.css";
import { auth } from "../../firebase";
import { useStateValue } from "../../providers/StateProvider";
import { motion } from "framer-motion";

const headerVarience = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Header() {
  const history = useHistory();
  const [{ user }] = useStateValue();
  function hanleSignOut() {
    auth.signOut();
    history.push("/");
  }

  let location = window.location.href;
  let includesAuth =
    location.includes("signin") || location.includes("register");

  return (
    <motion.header
      id="header"
      variants={headerVarience}
      initial="hidden"
      animate="visible"
    >
      <NavLink className="nav-link" to="/">
        <motion.h1 className="title">Study Tracker</motion.h1>
      </NavLink>

      {user ? (
        <div className="header-right-elements">
          <p className="header-greeting">Hello,{`${user.email}`}</p>
          <NavLink className="nav-link" to="/" onClick={hanleSignOut}>
            {!includesAuth ? "SignOut" : null}
          </NavLink>
        </div>
      ) : (
        <div className="header-right-elements">
          <NavLink className="nav-link" to="/user/signin">
            {!includesAuth ? "SignIn" : null}
          </NavLink>
        </div>
      )}
    </motion.header>
  );
}
