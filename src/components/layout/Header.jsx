import React from "react";
import { Link } from "react-router-dom";
import "../../style/header.css";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h1 className="title">Study Tracker</h1>
      </Link>
    </header>
  );
}
