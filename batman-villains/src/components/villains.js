import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { logOut } from "../store/actions/actions";
import Accordion from "../functionality/accordion";
import logo from "../icons/home.jpg";
import "../App.css";
import joker from "../icons/joker.jpg";
import penguin from "../icons/penguin.jpg";
import twoface from "../icons/twoface.png";
import blackmask from "../icons/blackmask.jpg";
import hugoStrange from "../icons/hugostrange.png";
import ras from "../icons/ras.jpg";
import mrFreeze from "../icons/mrfreeze.jpg";
import riddler from "../icons/riddler.jpg";
import poisonIvy from "../icons/poisonivy.png";
import harleyQuinn from "../icons/harleyquinn.jpg";
import scarecrow from "../icons/scarecrow.png";
import deathstroke from "../icons/deathstroke.png";
import catWoman from "../icons/catwoman.jpg";
import calendarMan from "../icons/calendarman.jpg";
import talia from "../icons/talia.png";
import prometheus from "../icons/prometheus.jpg";
import manBat from "../icons/manbat.jpg";
import killerCroc from "../icons/killercroc.jpg";
import solomon from "../icons/solomongrundy.png";
import clayface from "../icons/clayface.jpg";
import bane from "../icons/bane.jpg";
import firefly from "../icons/firefly.jpg";
import madHatter from "../icons/madhatter.png";
import killerMoth from "../icons/killermoth.jpg";
import ventriloquist from "../icons/scarface.png";
import greatWhiteShark from "../icons/greatwhiteshark.jpg";
import deadshot from "../icons/deadshot.jpg";
import azrael from "../icons/azrael.png";
import hush from "../icons/hush.png";
import victor from "../icons/victorzsasz.png";
import anarky from "../icons/anarky.jpg";
import humptydumpty from "../icons/humptydumpty.jpg";
import rat from "../icons/ratcatcher.jpg";
import tweedle from "../icons/tweedle.jpg";
import professorPyg from "../icons/professorpyg.jpg";

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
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={joker}
        />
        <Accordion
          title="The Joker"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={penguin}
        />
        <Accordion
          title="The Penguin"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={twoface}
        />
        <Accordion
          title="Two-Face"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={blackmask}
        />
        <Accordion
          title="Black Mask"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={hugoStrange}
        />
        <Accordion
          title="Hugo Strange"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={ras}
        />
        <Accordion
          title="Ra's al Ghul"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={mrFreeze}
        />
        <Accordion
          title="Mr. Freeze"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <h3>Second in Commands</h3>
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={riddler}
        />
        <Accordion
          title="The Riddler"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={poisonIvy}
        />
        <Accordion
          title="Poison Ivy"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={harleyQuinn}
        />
        <Accordion
          title="Harley Quinn"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={scarecrow}
        />
        <Accordion
          title="Scarecrow"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={deathstroke}
        />
        <Accordion
          title="Deathstroke"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={catWoman}
        />
        <Accordion
          title="Catwoman"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={calendarMan}
        />
        <Accordion
          title="Calendar Man"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={talia}
        />
        <Accordion
          title="Talia al Ghul"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={prometheus}
        />
        <Accordion
          title="Prometheus"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <h3>Brutes</h3>
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={manBat}
        />
        <Accordion
          title="Man-Bat
          "
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={killerCroc}
        />
        <Accordion
          title="Killer Croc"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={solomon}
        />
        <Accordion
          title="Solomon Grundy"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={clayface}
        />
        <Accordion
          title="Clayface"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={bane}
        />
        <Accordion
          title="Bane"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />

        <h3>Henchmen</h3>
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={firefly}
        />
        <Accordion
          title="Firefly"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={madHatter}
        />
        <Accordion
          title="Mad Hatter"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={killerMoth}
        />
        <Accordion
          title="Killer Moth"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={ventriloquist}
        />
        <Accordion
          title="The Ventriloquist and Scarface"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={greatWhiteShark}
        />
        <Accordion
          title="Great White Shark"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={deadshot}
        />
        <Accordion
          title="Deadshot"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={azrael}
        />
        <Accordion
          title="Azrael"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={hush}
        />
        <Accordion
          title="Hush"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <h3>Thugs</h3>
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={victor}
        />
        <Accordion
          title="Victor Zsasz"
          content="
        <h3></h3>
        <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={anarky}
        />
        <Accordion
          title="Anarky"
          content="
      <h3></h3>
      <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={humptydumpty}
        />
        <Accordion
          title="Humpty Dumpty"
          content="
    <h3></h3>
    <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={rat}
        />
        <Accordion
          title="Ratcatcher"
          content="
  <h3></h3>
  <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={tweedle}
        />
        <Accordion
          title="Tweedle-Dee and Tweedle-Dum"
          content="
          <h3></h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={professorPyg}
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
export default Villains;
