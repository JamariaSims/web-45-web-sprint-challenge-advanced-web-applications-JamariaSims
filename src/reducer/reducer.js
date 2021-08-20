import { LOGIN_START, LOGIN_SUCCUSS, LOGIN_FAIL } from "../action/action";
const initialState = {
  username: "",
  password: "",
  error: "",
  userToken: "",
  isFetching: false,
}; 
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {

      return { ...state, isFetching: true };
    }
    case LOGIN_SUCCUSS: {
      return {
        ...state,
        isFetching: false,
        error: "",
        userToken: action.payload,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: "Username or Password not valid",
      };
    }
    default: {
      return state;
    }
  }
}
