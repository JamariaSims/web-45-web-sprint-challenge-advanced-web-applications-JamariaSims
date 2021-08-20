//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import BubblePage from "./BubblePage";
import Login from "./Login";
import { Component } from "react";

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
