import axios from "axios";
import { connect } from "react-redux";
const loginAuth = (props) => {
  return axios.create({
    headers: { token: props.token },
    data: {
      username: "Lambda",
      password: "School",
    },
  });
};
//Task List:
//Build and export a function used to send in our authorization token
function mapStateToProps(state) {
  return {
    token: state.token,
  };
}
export default connect(mapStateToProps, {})(loginAuth);
