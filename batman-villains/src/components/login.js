import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import { logInUser } from "../../src/store/actions/actions";
import logo from "../icons/login.jpg";
import "../App.css";

const UserLogin = ({ touched, errors, logInUser, history, token }) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  // useEffect(() => {}, [history, token]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username && user.password) {
      logInUser(user);
      // setUser({ username: "", password: "" });
      if (token) {
        history.push("/create");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <div id="mySidenav" class="sidenav">
        <h1>Villains of Gotham</h1>
        <NavLink className="a" to="/home">
          Home
        </NavLink>
        <br />
        <NavLink className="a" to="/villains">
          Villains
        </NavLink>
        <br />
        <NavLink className="a" to="/register">
          Register
        </NavLink>
        <br />
        <NavLink className="a" to="/login">
          Login
        </NavLink>
        <br />
        <NavLink className="a" to="/create">
          Create
        </NavLink>
        <br />
        <NavLink className="a" to="/squads">
          Squads
        </NavLink>
        <br />
        <NavLink className="a" to="/about">
          About
        </NavLink>
      </div>
      <Form className="login-form" onChange={handleChange}>
        <h1 className="top-h1">Login</h1>
        <h3>
          Don't Have An Account? Click
          <a href="/register"> Here</a> To Register!
        </h3>
        <img width="25%" src={logo} />
        <br />
        <br />
        <Label for="username">Username: </Label>
        <Field
          className="form-control"
          type="text"
          name="username"
          placeholder=" Enter your Username"
          autoComplete="username"
        ></Field>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}{" "}
        <br /> <br />
        <Label for="password">Password: </Label>
        <Field
          className="form-control"
          type="password"
          name="password"
          placeholder=" Enter your Password"
          autoComplete="current-password"
        ></Field>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <br /> <br />
        <Button
          className="submit"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Sign In
        </Button>
        <br />
        <br />
      </Form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer class="footer pt-80 pt-xs-60">
        <div class="footer-container">
          <h1>Villains of Gotham</h1>
          <div class="copyright">
            <p>
              © 2020
              <a>
                <b> Forrest Darabian </b>
              </a>
            </p>
          </div>
          <div class="left">
            <h4 class="something">Contact / Links</h4>
            <li>
              {" "}
              <a href="mailto:forrestdarabian@gmail.com">
                <i class="ion-ios-email fa-icons"></i>
                Contact Me
              </a>{" "}
            </li>
            <li>
              <a href="https://www.forrestdarabian.com/">
                <i class="fa-angle-double-right"></i>Developers Site
              </a>
            </li>
          </div>
          <br />
          Batman is a property of Warner Bros & DC Comics.
        </div>
      </footer>{" "}
      <br />
    </div>
  );
};

const LoginWithFormik = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username!"),
    password: Yup.string().required("Please enter a password!"),
  }),
})(UserLogin);

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps, { logInUser: logInUser })(
  LoginWithFormik
);
