//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

import React from "react";
import { connect } from "react-redux";
import BubblePage from "./BubblePage";

function PrivateRoute(props) {
  console.log(props);
  return props.token !== "" ? (
    <>
      <BubblePage />
    </>
  ) : (
    <h1>Loading...</h1>
  );
}
function mapStateToProps(state) {
  return {
    token: state.token,
  };
}
export default connect(mapStateToProps, {})(PrivateRoute);
