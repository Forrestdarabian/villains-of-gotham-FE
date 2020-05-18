import React from "react";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Create from "./components/create";
import Villains from "./components/villains";
import Startup from "./components/startup";
import Register from "./components/register";
import Login from "./components/login";
import Squads from "./components/squads";

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
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/squads" component={Squads} />
      </Switch>
    </div>
  );
}

export default App;
