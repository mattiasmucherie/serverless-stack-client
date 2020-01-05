import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute
        path="/"
        exact
        component={Home}
        appProps={appProps}
      ></AppliedRoute>
      <AppliedRoute
        path="/signin"
        exact
        component={Signin}
        appProps={appProps}
      ></AppliedRoute>
      <AppliedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      ></AppliedRoute>
      <AppliedRoute
        path="/notes/new"
        exact
        component={NewNote}
        appProps={appProps}
      ></AppliedRoute>
      <AppliedRoute
        path="/notes/:id"
        exact
        component={Notes}
        appProps={appProps}
      ></AppliedRoute>
      <AppliedRoute
        path="/settings"
        exact
        component={Settings}
        appProps={appProps}
      ></AppliedRoute>
      <Route component={NotFound}></Route>
    </Switch>
  );
}
