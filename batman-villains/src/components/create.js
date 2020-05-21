import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut, addSquads } from "../store/actions/actions";
import logo from "../icons/home.jpg";
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
    boss: "The Joker",
    secondInCommand: "Harley Quinn",
    brute: "Bane",
    henchman: "Firefly",
    thug: "Anarky",
  });

  // const [selectedCategory, setCategory] = useState("The Joker");

  // const CategoryMapping = {
  //   Movies: [
  //     "Action",
  //     "Drama",
  //     "Horror",
  //     "Romance",
  //     "Sci-Fi",
  //     "Animation",
  //     "Thriller",
  //   ],
  //   Music: ["Alternative", "Rap", "Metal", "Pop", "Classic Rock"],
  //   TV: ["Comedy", "Drama", "Cartoon"],
  //   Games: ["90's", "2000's", "2010's"],
  //   Animals: ["Land", "Sea", "Air"],
  //   Holidays: ["Holidays"],
  //   Consoles: ["SEGA", "Nintendo", "Playstation"],
  // };

  // const handleChanges = (e) => {
  //   if (e.currentTarget.id == "category") {
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
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="Home">
        <form id="clear-input" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="top-h1">Create a Villain Squad</h1>
          <h3>Users Will Be Able To See Your Top 5's</h3>
          <div className="form-group">
            <label>Pick a Boss: </label>
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
              {/* {Object.keys(CategoryMapping).map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Second in Command: </label>
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
              {/* {CategoryMapping[selectedCategory].map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Brute: </label>
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
              {/* {CategoryMapping[selectedCategory].map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Henchman: </label>
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
              {/* {CategoryMapping[selectedCategory].map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Thug: </label>
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
        <div className="second-nav-container">
          <NavLink to="/home">
            <button className="home">Home</button>
          </NavLink>
        </div>

        <br />
        <br />
        <br />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
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
