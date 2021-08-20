import axios from "axios";
const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("TOKEN"));
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:5000/api",
  });
};
//Task List:
//Build and export a function used to send in our authorization token

export default axiosWithAuth;
