import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../style/create-box.css";
import { useStateValue } from "../../providers/StateProvider";
import axios from "axios";
import { motion } from "framer-motion";

export default function CreateForm() {
  const [, dispatch] = useStateValue();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState("");
  const [studyName, setStudyName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setCurrentUser(authUser.email);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_STUDY",
      study: {
        studyName,
      },
    });

    db.collection("studies").add({
      name: studyName,
      days: {
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
      },
      user_email: currentUser,
    });

    setStudyName("");
    history.push("/user/track");
  }

  const containerVariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
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

  const labelVariant = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <motion.div
      className="create-box"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="create-box-inner">
        <form onSubmit={handleSubmit} action="">
          <motion.label
            style={{ fontWeight: "200", fontSize: "2rem" }}
            htmlFor="name"
            variants={labelVariant}
            initial="hidden"
            animate="visible"
          >
            Study Subject
          </motion.label>
          <input
            style={{ padding: "1.2rem" }}
            onChange={(e) => setStudyName(e.target.value)}
            id="name"
            type="text"
            name="name"
            value={studyName || ""}
          />
          <br />

          <br />

          <Button
            style={{ padding: "1.2rem", borderRadius: "30px" }}
            type="submit"
            variant="success"
          >
            {" "}
            Create{" "}
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
