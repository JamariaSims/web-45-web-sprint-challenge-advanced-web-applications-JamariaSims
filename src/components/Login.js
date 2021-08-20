import React, { useState } from "react";
import { connect } from "react-redux";
import BubblePage from "./BubblePage";
import LoginForm from "./LoginForm";
const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const error = props.error;
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      {props.Token ? (
        <BubblePage />
      ) : (
        <>
          {" "}
          <div data-testid="loginForm" className="login-form">
            <LoginForm values={values} setValues={setValues} />
          </div>
          <p id="error" className="error">
            {error}
          </p>
        </>
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    error: state.error,
  };
}
export default connect(mapStateToProps, {})(Login);

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
