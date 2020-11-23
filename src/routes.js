import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUp from "./SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
