import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../../style/register.css";
import { auth } from "../../firebase";

export default function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitSignIn = (e) => {
    // console.log("inside login");
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin-container">
      <h5>Sign In </h5>
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
        <Button onClick={handleSubmitSignIn} variant="primary" type="submit">
          SignIn
        </Button>
        <Link to={"/"}>
          <Button variant="danger" type="submit">
            Cancel
          </Button>
        </Link>
        <Form.Text className="text-muted">
          Are you new around here?
          <Link to={"/user/register"}>Register</Link>
        </Form.Text>
      </Form>
    </div>
  );
}
