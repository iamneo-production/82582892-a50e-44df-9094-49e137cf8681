import React, { useRef, useState } from "react";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Auth = (props) => {
  const navigate = useNavigate();
  const [Err_msg, setErr_msg] = useState(false);
  const [msg, setmsg] = useState("");
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var phoneno = /^\d{10}$/;
  const User = useRef();
  const Email = useRef();
  const Username = useRef();
  const Phone_num = useRef();
  const Password = useRef();
  const Confirm_pass = useRef();
  let formData = {};
  var errors = [
    "Please fill all the input fields",
    "Password should contain 6 characters, atleast one number and one special character",
    "Confirm password mismatched",
    "invalid phone number",
  ];
  async function postUserData() {
    try {
      const response = await fetch("https://localhost:44358/User/Signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      alert(data.message);
      if (response.ok) navigate("/login");
      else return;
    } catch {
      return false;
    }
  }

  const submit = (event) => {
    event.preventDefault();
    formData.userRole = User.current.value;
    formData.email = Email.current.value;
    formData.username = Username.current.value;
    formData.mobileNumber = Phone_num.current.value;
    formData.password = Password.current.value;
    const confirm_pass = Confirm_pass.current.value;
    setErr_msg(false);
    if (
      !(
        formData.userRole &&
        formData.email &&
        formData.username &&
        formData.mobileNumber &&
        formData.password &&
        confirm_pass
      )
    ) {
      setmsg(errors[0]);
      setErr_msg(true);
      return;
    }

    if (!regularExpression.test(formData.password)) {
      setmsg(errors[1]);
      setErr_msg(true);
      return;
    }
    if (formData.password !== confirm_pass) {
      setmsg(errors[2]);
      setErr_msg(true);
      return;
    }
    if (!formData.mobileNumber.match(phoneno)) {
      setmsg(errors[3]);
      setErr_msg(true);
      return;
    }

    postUserData();
  };

  return (
    <Container className=" w-100 py-5">
      <Row className="justify-content-center">
        <Col
          sm={8}
          md={6}
          xs={10}
          className=" mb-2 rounded border border-1  bg-light  "
        >
          <h1 className="text-center">Sign up</h1>
          <form className="d-flex flex-column text-left p-3" onSubmit={submit}>
            <Form.Group className="mb-2">
              <Form.Label>Enter Admin/User</Form.Label>
              <Form.Control ref={User} as="select" id="admin/user">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={Email}
                id="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Username</Form.Label>
              <Form.Control
                ref={Username}
                id="username"
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                ref={Phone_num}
                id="mobileNumber"
                type="tel"
                placeholder="Enter mobile number"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={Password}
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Confrim Password</Form.Label>
              <Form.Control
                ref={Confirm_pass}
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
              />
            </Form.Group>
            {Err_msg && (
              <div className="alert alert-danger alert-dismissible fade show m-3">
                <strong>Error!</strong> {msg}
              </div>
            )}
            <div className="text-center">
              <Button id="submitButton" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <p>
              Already a User?
              <br />
              <a id="signinLink" href="login">
                Log in
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Auth;
