import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
function App(props) {
  const Token = JSON.parse(localStorage.getItem("TOKEN"));
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a
            onClick={() => {
              localStorage.setItem("TOKEN", null);
            }}
            data-testid="logoutButton"
            href={window.location.href}
          >
            logout
          </a>
        </header>
        <Route absolute path="/">
          <Login Token={Token} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    userToken: state.userToken,
  };
};
export default connect(mapStateToProps, {})(App);

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
