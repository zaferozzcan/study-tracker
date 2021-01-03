import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { auth } from "../../firebase";

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signin-container">
      <h5>Sign Up </h5>
      <Form>
        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleRegister} variant="success" type="submit">
          Register
        </Button>
        <Link to={"/"}>
          <Button variant="danger" type="submit">
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  );
}
