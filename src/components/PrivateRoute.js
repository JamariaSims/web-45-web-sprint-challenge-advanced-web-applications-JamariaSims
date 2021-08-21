//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import { Redirect, Route } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

function PrivateRoute({ children, ...rest }) {
  const userToken = localStorage.getItem("TOKEN");
  return userToken ? (
    <Route
      {...rest}
      render={() => {
        return children;
      }}
    />
  ) : (
    <Redirect to="/login" />
  );
}
export default connect(null, {})(PrivateRoute);
