import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut, updateSquad } from "../store/actions/actions";
import logo from "../icons/edit.jpg";
import "../App.css";

const Edit = (props) => {
  let cardData = props.location.state ? props.location.state.carddata : null;

  if (!cardData) {
    props.history.push("squads");
  }

  let initialState = {
    boss: cardData.boss,
    secondInCommand: cardData.secondInCommand,
    brute: cardData.brute,
    henchman: cardData.henchman,
    thug: cardData.thug,
    username: cardData.username,
  };

  const BossMapping = {
    "Hugo Strange": [],
    "The Penguin": [],
    "Ra's al Ghul": [],
    "Mr. Freeze": [],
    "The Joker": [],
    "Two-Face": [],
    "Black Mask": [],
  };

  const SecondInCommandMapping = {
    "The Riddler": [],
    "Poison Ivy": [],
    "Harley Quinn": [],
    Scarecrow: [],
    Deathstroke: [],
    "Cat Woman": [],
    "Calendar Man": [],
    "Talia Al Ghul": [],
    Prometheus: [],
  };

  const BruteMapping = {
    "Man-Bat": [],
    "Killer Croc": [],
    "Solomon Grundy": [],
    Clayface: [],
    Bane: [],
  };

  const HenchmenMapping = {
    Firefly: [],
    "Mad Hatter": [],
    "Killer Moth": [],
    "The Ventriloquist and Scarface": [],
    "Great White Shark": [],
    Deadshot: [],
    Azrael: [],
    Hush: [],
  };

  const ThugMapping = {
    "Victor Zsasz": [],
    Anarky: [],
    "Humpty Dumpty": [],
    Ratcatcher: [],
    "Tweedledee & Tweedledum": [],
    "Professor Pyg": [],
  };

  const [selectedCategory, setCategory] = useState(cardData.category);
  const [editing, setEditing] = useState(initialState);
  console.log(editing);

  const handleChanges = (e) => {
    setEditing();
    setEditing({ ...editing, [e.target.name]: e.target.value });
  };

  const saveEdit = (e) => {
    e.preventDefault();

    props.updateSquad(editing, cardData.id);
    props.history.push(`/squads`);
  };

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
        <form id="clear-input">
          <h1 className="top-h1">Edit a Villain Squad</h1>
          <h3>Made a mistake? No problem, you can edit a squad here</h3>
          <img src={logo} width="50%" />
          <br />
          <br />
          <div className="form-group">
            <label>Pick a Boss: </label>
            <br />
            <select
              className="form-control"
              id="boss"
              type="text"
              name="boss"
              placeholder="Pick a Boss"
              value={editing.boss}
              onChange={handleChanges}
              required
            >
              {Object.keys(BossMapping).map((item) => {
                return <option value={item}> {item}</option>;
              })}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Second in Command: </label>
            <br />
            <select
              className="form-control"
              id="secondInCommand"
              type="text"
              name="secondInCommand"
              placeholder="Choose a Second in Command"
              value={editing.secondInCommand}
              onChange={handleChanges}
              required
            >
              {Object.keys(SecondInCommandMapping).map((item) => {
                return <option value={item}> {item}</option>;
              })}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Brute: </label>
            <br />
            <select
              className="form-control"
              id="brute"
              type="text"
              name="brute"
              placeholder="Choose a Brute"
              value={editing.brute}
              onChange={handleChanges}
              required
            >
              {Object.keys(BruteMapping).map((item) => {
                return <option value={item}> {item}</option>;
              })}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Henchman: </label>
            <br />
            <select
              className="form-control"
              id="henchman"
              type="text"
              name="henchman"
              placeholder="Choose a Henchman"
              value={editing.henchman}
              onChange={handleChanges}
              required
            >
              {Object.keys(HenchmenMapping).map((item) => {
                return <option value={item}> {item}</option>;
              })}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Thug: </label>
            <br />
            <select
              className="form-control"
              id="thug"
              type="text"
              name="thug"
              placeholder="Choose a Thug"
              value={editing.thug}
              onChange={handleChanges}
              required
            >
              {Object.keys(ThugMapping).map((item) => {
                return <option value={item}> {item}</option>;
              })}
            </select>
            <br />
            <br />

            <div className="form-group">
              <label>Your Name: </label>
              <br />
              <input
                className="form-control"
                id="username"
                type="text"
                name="username"
                maxLength={200}
                placeholder="Enter your name"
                value={editing.username}
                onChange={handleChanges}
                required
              />
            </div>
          </div>

          <br />
          <button type="primary" onClick={(e) => saveEdit(e)} className="home">
            Update Squad
          </button>
          <br />
          <br />
        </form>
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
};

const mapStateToProps = (state) => {
  return {
    itemData: state.itemData,
    username: state.username,
    changed: state.changed,
  };
};
export default connect(mapStateToProps, { updateSquad })(Edit);
