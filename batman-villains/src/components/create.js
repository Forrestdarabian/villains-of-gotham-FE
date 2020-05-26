import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut, addSquads } from "../store/actions/actions";
import logo from "../icons/create.jpeg";
import "../App.css";

const Create = ({
  touched,
  errors,
  logInUser,
  history,
  token,
  addSquads,
  boss,
  secondInCommand,
  brute,
  henchman,
  thug,
}) => {
  if (!token) {
    history.push(`/login/`);
  }

  const [squadItem, setSquadItem] = useState({
    boss: "",
    secondInCommand: "",
    brute: "",
    henchman: "",
    thug: "",
  });

  const [selectedCategory, setCategory] = useState("The Joker");

  // const CategoryMapping = {
  //   Bosses: [
  //     "Hugo Strange",
  //     "The Penguin",
  //     "Ra's al Ghul",
  //     "Mr. Freeze",
  //     "The Joker",
  //     "Two-Face",
  //     "Black Mask",
  //   ],

  //   secondInCommand: [
  //     "The Riddler",
  //     "Poison Ivy",
  //     "Harley Quinn",
  //     "Scarecrow",
  //     "Deathstroke",
  //     "Cat Woman",
  //     "Calendar Man",
  //     "Talia Al Ghul",
  //     "Prometheus",
  //   ],
  //   brutes: ["Man-Bat", "Killer Croc", "Solomon Grundy", "Clyaface", "Bane"],

  //   henchmen: [
  //     "Firefly",
  //     "Mad Hatter",
  //     "Killer Moth",
  //     "The Ventriloquist and Scarface",
  //     "Great White Shark",
  //     "Deadshot",
  //     "Azrael",
  //     "Hush",
  //   ],
  //   thugs: [
  //     "Victor Zsasz",
  //     "Anarky",
  //     "Humpty Dumpty",
  //     "Ratcatcher",
  //     "Tweedledee & Tweedledum",
  //     "Professor Pyg",
  //   ],
  // };

  // const handleChanges = (e) => {
  //   if (e.currentTarget.id == "bosses") {
  //     setCategory(e.target.value);
  //     let currentSquadItem = squadItem;
  //     squadItem.category = e.target.value;
  //     squadItem.subcategory = CategoryMapping[e.target.value][0];

  //     setSquadItem();
  //   }
  //   setSquadItem({ ...squadItem, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(squadItem);
    addSquads(squadItem);
    history.push(`/squads`);
    // document.getElementById("clear-input").reset();
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
        <form id="clear-input" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="top-h1">Create a Villain Squad</h1>
          <h3>Users Will Be Able To See Your Squad</h3>
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
              value={boss}
              // onChange={handleChanges}
              required
            >
              <option>Hugo Strange</option>
              <option>The Penguin</option>
              <option>Ra's al Ghul</option>
              <option>Mr. Freeze</option>
              <option>The Joker</option>
              <option>Two-Face</option>
              <option>Black Mask</option>

              {/* {Object.keys(CategoryMapping).map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
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
              value={secondInCommand}
              // onChange={handleChanges}
              required
            >
              <option>The Riddler</option>
              <option>Poison Ivy</option>
              <option>Harley Quinn</option>
              <option>Scarecrow</option>
              <option>Deathstroke</option>
              <option>Catwoman</option>
              <option>Calendar Man</option>
              <option>Talia al Ghul</option>
              <option>Prometheus</option>

              {/* {CategoryMapping[selectedCategory].map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
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
              value={brute}
              // onChange={handleChanges}
              required
            >
              {" "}
              <option>Man-Bat</option>
              <option>Killer Croc</option>
              <option>Solomon Grundy</option>
              <option>Clayface</option>
              <option>Bane</option>
              {/* {CategoryMapping[selectedCategory].map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
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
              value={henchman}
              // onChange={handleChanges}
              required
            >
              <option>Firefly</option>
              <option>Mad Hatter</option>
              <option>Killer Moth</option>
              <option>The Ventriloquist & Scarface</option>
              <option>Great White Shark</option>
              <option>Deadshot</option>
              <option>Azrael</option>
              <option>Hush</option>

              {/* {CategoryMapping[selectedCategory].map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
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
              value={thug}
              // onChange={handleChanges}
              required
            >
              <option>Victor Zsasz</option>
              <option>Anarky</option>
              <option>Humpty Dumpty</option>
              <option>Ratcatcher</option>
              <option>Tweedle-Dee & Tweedle-Dum</option>
              <option>Professor Pyg</option>

              {/* {CategoryMapping[selectedCategory].map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
            </select>
          </div>

          <br />
          <button type="submit" className="home">
            Submit
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
          <h1>Total Top 5's</h1>
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
};

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP FORM`, state);
  return {
    state: state,
    token: state.token,
  };
};
export default connect(mapStateToProps, { addSquads })(Create);
