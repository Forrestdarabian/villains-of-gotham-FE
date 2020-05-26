import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { logOut } from "../store/actions/actions";
import Accordion from "../functionality/accordion";
import logo from "../icons/home.jpg";
import "../App.css";
import Card from "./card-view";

import { logOut, fetchSquad, deleteSquad } from "../store/actions/actions";

const Squads = (props) => {
  const { touched, errors, logInUser, history, token } = props;

  if (!token) {
    props.history.push("/login/");
  }
  useEffect(() => {
    props.fetchSquad();
  }, []);

  return (
    <div className="startup">
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
      <div className="startup-home">
        <NavLink to="/home">
          <br />
          <br />
          <br />
          <br />
          <button>Back to Home</button>
        </NavLink>
        <div className="posted-squads">
          <h1>Posted Squads</h1>
          <h3>
            Below are user submitted Squads. If you recently made a Squad <br />{" "}
            you will find it at the bottom.
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {props.itemData.map((item) => {
            return <Card item={item} history={history} />;
          })}{" "}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
  );
};

const mapStateToProps = (state) => {
  console.log("THIS IS MSTP STATE IN LOGIN", state);
  return {
    itemData: state.itemData,
    error: state.error,
    token: state.token,
  };
};

export default connect(mapStateToProps, { fetchSquad })(Squads);
