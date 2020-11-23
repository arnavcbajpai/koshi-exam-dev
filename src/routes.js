import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Homepage from "Homepage/HomePage";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/homepage" component={Homepage} />
    </Switch>
  );
};

export default routes;
