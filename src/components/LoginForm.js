import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import { loginStart } from "../action/action";
import { connect } from "react-redux";
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

function LoginForm(props) {
  const { values, setValues } = props;
  const classes = useStyles();
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
  };

  return (
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
  );
}
export default connect(null, { loginStart })(LoginForm);
