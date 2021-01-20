import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../style/create-box.css";
import { useStateValue } from "../../providers/StateProvider";
import axios from "axios";

export default function CreateForm() {
  const [, dispatch] = useStateValue();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState("");
  const [studyName, setStudyName] = useState("");
  const [studyCategory, setStudyCategory] = useState();

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
        studyCategory,
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
    setStudyCategory("");
    history.push("/user/track");
  }

  return (
    <div className="create-box">
      <div className="create-box-inner">
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="name">Study Subject</label>
          <input
            onChange={(e) => setStudyName(e.target.value)}
            id="name"
            type="text"
            name="name"
            value={studyName || ""}
          />
          <br />
          <label htmlFor="category">Study Category</label>
          <input
            onChange={(e) => setStudyCategory(e.target.value)}
            id="category"
            type="text"
            name="category"
            value={studyCategory || ""}
          />
          <br />
          <Button type="submit" variant="success">
            {" "}
            Create{" "}
          </Button>
        </form>
      </div>
    </div>
  );
}
