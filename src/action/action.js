import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCUSS = "LOGIN_SUCCUSS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginStart = (values) => (dispatch) => {
  const { username, password } = values;
  dispatch({ type: LOGIN_START });
  axios
    .post("http://localhost:5000/api/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      dispatch({ type: LOGIN_SUCCUSS, payload: response.data.payload });
    })
    .catch((response) => {
      dispatch({ type: LOGIN_FAIL, payload: response.data });
    });
};
