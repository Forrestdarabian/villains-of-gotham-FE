import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { logOut } from "../store/actions/actions";
import Accordion from "../functionality/accordion";
import logo from "../icons/about.jpg";
import "../App.css";

function About(props) {
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
          <h1 className="top-h1">About</h1>
          <h3>Our Story and Information about our App!</h3>
        </div>
        <br />
        <img width="50%" src={logo} />
        <div className="text-section">
          <h3>Our Story</h3>
          <p className="about">
            Inspired by all the crazy villains that have tormented Batman
            throughout the years, <br /> (especially in the Arkham series) I was
            inspired to make a website that lists them all off! <br /> I then
            realized that an index of Batman villains obviously already exists
            in a bunch
            <br /> of other places online, so I have implemented the "Create a
            Squad" feature
            <br /> where the user can pick villains to assemble a squad that
            shows the likelihood <br /> of them defeating Batman! Follow the
            tabs to the left to get started!
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
export default About;
