import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../style/banner.css";
import { useStateValue } from "../../providers/StateProvider";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      delay: 1.5,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 5px rgb(255,255,255)",
    transition: {
      yoyo: 20,
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export default function Banner() {
  const [{ user }] = useStateValue();
  function handleClick() {}
  return (
    <div className="banner">
      <div className="banner-inner">
        <div className="typewriter">
          <h1>Track Your Study and Keep Up Good Work!</h1>
        </div>
        <motion.div
          className="banner-button-container"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Link to={user ? "/create" : "user/signin"}>
            <Button
              style={{ padding: "1.2rem", borderRadius: "30px" }}
              onClick={handleClick}
              className="banner-button"
              variant="success"
            >
              Create New Tracker
            </Button>
          </Link>
          <Link to={user ? "/user/track" : "user/signin"}>
            <Button
              style={{ padding: "1.2rem", borderRadius: "30px" }}
              onClick={handleClick}
              className="banner-button"
              variant="success"
            >
              Go Track List
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
