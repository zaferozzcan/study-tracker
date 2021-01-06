import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../style/create-box.css";

export default function CreateForm() {
  const [studyName, setStudyName] = useState("");
  const [studyCategory, setStudyCategory] = useState();

  console.log(studyName, studyCategory);
  return (
    <div className="create-box">
      <div className="create-box-inner">
        <form action="">
          <label htmlFor="name">Study Subject</label>
          <input
            onChange={(e) => setStudyName(e.target.value)}
            id="name"
            type="text"
            name="name"
          />
          <br />
          <label htmlFor="category">Study Category</label>
          <input
            onChange={(e) => setStudyCategory(e.target.value)}
            id="category"
            type="text"
            name="category"
          />
          <br />
          <Button variant="success"> Create </Button>
        </form>
      </div>
    </div>
  );
}
