import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducer/reducer";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
const store = createStore(reducer, applyMiddleware(thunk));
const back = (window.history.href = "/");
function App() {

  return (
    <div className="App">
      <header>
        Color Picker Sprint Challenge
        <a
          onClick={() => {
            localStorage.setItem("TOKEN", null);
          }}
          data-testid="logoutButton"
          href={back}
        >
          logout
        </a>
      </header>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/PrivateRoute">
            <PrivateRoute path="/PrivateRoute" component={BubblePage} />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
