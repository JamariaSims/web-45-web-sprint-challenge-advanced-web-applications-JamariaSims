import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCUSS = "LOGIN_SUCCUSS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginStart = () => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axios
    .post("http://localhost:5000/api/login", {
      username: "Lambda",
      password: "School",
    })
    .then((response) => {
      dispatch({ type: LOGIN_SUCCUSS, payload: response.data });
    })
    .catch((response) => {
      dispatch({ type: LOGIN_FAIL, payload: response.data });
    });
};
