import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
// Step 1. Import react-router functions
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

// Step 2. Change so router is coordinating what is displayed
ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/login"><Login /></Route>
      <Route path="/about"><About /></Route>
      <Route exact path="/"><Home /></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);