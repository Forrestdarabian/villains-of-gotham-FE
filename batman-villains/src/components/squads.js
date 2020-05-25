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
        <h1>Villains of Gotham</h1>
      </header>
      <div className="Home">
        <NavLink to="/home">
          <button>Back to Home</button>
        </NavLink>
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

const mapStateToProps = (state) => {
  console.log("THIS IS MSTP STATE IN LOGIN", state);
  return {
    itemData: state.itemData,
    error: state.error,
    token: state.token,
  };
};

export default connect(mapStateToProps, { fetchSquad })(Squads);
