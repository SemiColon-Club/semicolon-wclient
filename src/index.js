
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import {getToken, getAdminToken} from "./helper";

import Landing from "components/Landing.jsx";
import Login from "components/Login.jsx";
import Profile from "components/Profile.jsx";
import Team from "components/Team";
import Register from "components/Register.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Landing {...props} />} />
      <Route
        path="/landing"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login" 
      exact 
      render={props => <Login {...props} />} />
      <Route path="/team" 
      exact 
      render={props => <Team {...props} />} />
      <Route
        path="/profile"
        exact
        render={props => {
        if(getToken())
          return <Profile {...props} />
        else
          return <Redirect to="/login" {...props} />
        }}
      />
      <Route
        path="/register"
        exact
        render={props => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
