import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../icons/register.jpg";
import axiosWithAuth from "../utils/axiosWithAuth";
import { addUser } from "../store/actions/actions";

const Register = (props) => {
  console.log(props);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      fullName: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
      email: e.target[3].value,
    };

    await axiosWithAuth()
      .post(`api/users/register`, {
        fullName: user.fullName,
        username: user.username,
        password: user.password,
        email: user.email,
      })
      .then((res) => {
        console.log(res.data);
        props.history.push(`/login/`);
        // dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
        return true;
      })
      .catch((err) => {
        console.log(err);
        // dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
        alert(err.response.data.message);
        return err;
      });
  };

  return (
    <div className="home">
      <header className="Home-header">
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
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="top-h1">Sign Up</h1>
        <h3>
          Already Have An Account? Click
          <a href="/login"> Here</a> To Sign In!
        </h3>
        <img width="50%" src={logo} />
        <br />
        <br />

        <div className="form-group">
          <label>Full name: </label>
          <input
            type="text"
            className="form-control"
            placeholder=" Full name"
          />
        </div>
        <br />
        <div className="form-group">
          <label>Username: </label>
          <input type="text" className="form-control" placeholder=" Username" />
        </div>
        <br />

        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            className="form-control"
            placeholder=" Enter password"
          />
        </div>
        <br />

        <div className="form-group">
          <label>Email Address: </label>
          <input
            type="email"
            className="form-control"
            placeholder=" Enter email"
          />
        </div>
        <br />

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <br />
        <br />
      </form>
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

export default connect(null, { addUser: addUser })(Register);
