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
import UnauthenticatedRoute from "./components/UnathenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute
        path="/"
        exact
        component={Home}
        appProps={appProps}
      ></AppliedRoute>
      <UnauthenticatedRoute
        path="/signin"
        exact
        component={Signin}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/settings"
        exact
        component={Settings}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes/new"
        exact
        component={NewNote}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes/:id"
        exact
        component={Notes}
        appProps={appProps}
      />
      <Route component={NotFound}></Route>
    </Switch>
  );
}
