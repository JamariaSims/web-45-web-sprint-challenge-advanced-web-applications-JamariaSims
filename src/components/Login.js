import React, { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import BubblePage from "./BubblePage";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import { loginStart } from "../action/action";
import PrivateRoute from "./PrivateRoute";
const Login = (props) => {
  let history = useHistory();
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginStart(values);
    if (props.userToken) {
      localStorage.setItem("TOKEN", JSON.stringify(props.userToken));
      history.push("/PrivateRoute");
    }
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      margin: "0% auto",
      padding: "0% auto",
      flexDirection: "column",
    },
    input: {
      display: "flex",
      width: "50%",
      margin: "0% auto",
      padding: "0% auto",
    },
    button: {
      display: "flex",
      width: "50%",
      margin: "0% auto",
      padding: "0% auto",
      marginTop: "5%",
    },
  }));
  const error = props.error;
  const classes = useStyles();
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <div className={classes.root}>
          <FormControl className={classes.input}>
            <InputLabel>Username</InputLabel>
            <Input
              id="username"
              type={"text"}
              value={values.username}
              onChange={handleChange("username")}
            />
          </FormControl>
          <FormControl className={classes.input}>
            <InputLabel>Password</InputLabel>
            <Input
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />

            <Button
              id="submit"
              onClick={handleSubmit}
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              Login
            </Button>
          </FormControl>
        </div>
      </div>
      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    error: state.error,
    userToken: state.userToken,
  };
}
export default connect(mapStateToProps, { loginStart })(Login);

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
