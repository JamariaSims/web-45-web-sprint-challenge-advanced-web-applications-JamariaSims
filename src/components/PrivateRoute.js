//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

import React from "react";
import { connect } from "react-redux";
import BubblePage from "./BubblePage";
import Login from "./Login";

function PrivateRoute(props) {
  return props.token !== "" ? (
    <>
      <BubblePage />
    </>
  ) : (
    <Login />
  );
}
function mapStateToProps(state) {
  return {
    token: state.token,
  };
}
export default connect(mapStateToProps, {})(PrivateRoute);
