import axios from "axios";
import { connect } from "react-redux";
const axiosWithAuth = () => {
  const token = localStorage.getItem("TOKEN");
  return axios.create({
    headers: { token: token },
    data: {
      username: "Lambda",
      password: "School",
    },
    baseURL: "http://localhost:5000/api/",
  });
};
//Task List:
//Build and export a function used to send in our authorization token

export default connect(null, {})(axiosWithAuth);
