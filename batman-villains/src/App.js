import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Create from "./components/create";
import Villains from "./components/villains";
import Startup from "./components/startup";

// import "./styles/board.css";
// import "./styles/box.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Startup} />
        <Route path="/home" component={Home} />
        <Route path="/villains" component={Villains} />
        <Route path="/create" component={Create} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
