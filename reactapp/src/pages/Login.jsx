import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [isError, setisError] = useState(false);
  const navigate = useNavigate();
  const Userid = useRef();
  const Password = useRef();
  async function postUserData(userData) {
    try {
      const response = await fetch("https://localhost:44358/User/Login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      // if(!response.ok)
      // {
      //   throw Error("Something went wrong");
      // }
      const data = await response.json();
      console.log(data.message);
      if (data.userRole.toLowerCase() === "admin") {
        alert("Admin Logged In");
        navigate("/admin/academy");
      } else {
        alert("User Logged In");
        navigate("/user/academy");
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  const onLogin = (event) => {
    event.preventDefault();
    setisError(false);
    const email = Userid.current.value;
    const password = Password.current.value;
    if (!(email && password)) {
      setisError(true);
      return;
    }
    postUserData({ email: email, password: password });
  };
  return (
    <Container className="vh-100 pt-5 w-100">
      <Row className="justify-content-center">
        <Col sm={8} md={6} xs={10} className=" m-2 rounded  p-2 bg-light ">
          <h1 className="text-center">Log in</h1>
          <form className="d-flex flex-column text-left p-3" onSubmit={onLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={Userid}
                id="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={Password}
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            {isError && (
              <div className="alert alert-danger alert-dismissible fade show m-3">
                <strong>Error!</strong> Please fill all the input feilds
              </div>
            )}

            <div className="text-center">
              <Button id="loginButton" variant="primary" type="submit">
                Login
              </Button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <p>
              New User/Admin?{" "}
              <a id="signupLink" href="signup">
                Sign up
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
