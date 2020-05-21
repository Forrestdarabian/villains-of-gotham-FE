import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { logOut } from "../store/actions/actions";
import Accordion from "../functionality/accordion";
import logo from "../icons/home.jpg";
import "../App.css";

function Create(props) {
  const { touched, errors, logInUser, history, token } = props;
  return (
    <div className="home-container">
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
      <div className="Home">
        <div className="text-section">
          <h1 className="top-h1">Create a Squad</h1>
          <h3>
            Lets make a Squad of Villains! Create an Account or Login Below!
          </h3>
          {token ? (
            <div>
              <NavLink to="/create">
                <button className="home">Create Squad</button>
              </NavLink>
              <NavLink to="/posted-list">
                <button className="home">Posted squads</button>
              </NavLink>
              <br />
              {/* <button
                className="home"
                onClick={() => {
                  props.logOut();
                  props.history.push(`/login/`);
                }}
              >
                Logout
              </button> */}
            </div>
          ) : (
            <>
              {" "}
              <NavLink to="/register">
                <button className="home">Create an Account</button>
              </NavLink>
              <NavLink to="/login">
                <button className="home">Login</button>
              </NavLink>
              <br />
            </>
          )}
        </div>
        <br />
        <img width="50%" src={logo} />
        <div className="text-section">
          <h3>What is this website?</h3>
          <p className="about">
            This App allows you to create a squad of villains to face-off The
            Batman!
            <br />
            After you pick your villains you will get a percentage of how likely
            they'll be
            <br /> to defeat The Dark Knight! Follow the tabs to the left to get
            started!
          </p>
        </div>
        <br />{" "}
        <Accordion
          title="Meet The Creator"
          content="
          <h3>Forrest Darabian</h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>
    "
        />
        <br />
        <br />
      </div>
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
      <br />
      <br />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
    logInUser: state.logInUser,
  };
};
export default Create;
