import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../style/banner.css";
import { useStateValue } from "../../providers/StateProvider";

export default function Banner() {
  const [{ user }] = useStateValue();
  function handleClick() {}
  return (
    <div className="banner">
      <div className="banner-inner">
        <div className="typewriter">
          <h1>Track Your Study and Keep Up Good Work!</h1>
        </div>
        <Link to={user ? "/create" : "user/signin"}>
          <Button
            onClick={handleClick}
            className="banner-button"
            variant="success"
          >
            Create New Tracker
          </Button>
        </Link>
        <Link to={user ? "/user/track" : "user/signin"}>
          <Button
            onClick={handleClick}
            className="banner-button"
            variant="success"
          >
            Go Track List
          </Button>
        </Link>
      </div>
    </div>
  );
}
