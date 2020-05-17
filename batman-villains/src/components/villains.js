import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { logOut } from "../store/actions/actions";
import Accordion from "../functionality/accordion";
import logo from "../icons/home.jpg";
import "../App.css";

function Villains(props) {
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
          <h1 className="top-h1">Villains</h1>
          <h3>
            Here you can find a list of Gotham's deadly criminals! <br />
            Take all of their info into consideration before creating your
            squad!
          </h3>
        </div>
        <br />
        <h3>Bosses</h3>
        <Accordion
          title="The Joker"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="The Penguin"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Two-Face"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Black Mask"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Hugo Strange"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Ra's al Ghul"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Mr. Freeze"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <h3>Second in Commands</h3>
        <Accordion
          title="The Riddler"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Poison Ivy"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Harley Quinn"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Scarecrow"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Deathstroke"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Catwoman"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Calendar Man"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Talia al Ghul"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Prometheus"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <h3>Brutes</h3>
        <Accordion
          title="Man-Bat
          "
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Killer Croc"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Solomon Grundy"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Clayface"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Bane"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <h3>Henchmen</h3>
        <Accordion
          title="Firefly"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Mad Hatter"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Killer Moth"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="The Ventriloquist and Scarface"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Great White Shark"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Deadshot"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Azrael"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Hush"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <h3>Thugs</h3>
        <Accordion
          title="Victor Zsasz"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Anarky"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Humpty Dumpty"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Ratcatcher"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Tweedle-Dee and Tweedle-Dum"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <Accordion
          title="Professor Pyg"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
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
              All Rights Reserved.
            </p>
          </div>
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/smalllikeart"
              title="smalllikeart"
            >
              smalllikeart
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
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
export default Villains;
