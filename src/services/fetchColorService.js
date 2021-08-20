import { connect } from "react-redux";
import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = (props) => {
  console.log("gg");
  props.axiosWithAuth.get("colors").then((response) => {
    console.log(response);
    return response.data;
  });
  return "gfg";
};

export default connect(null, { axiosWithAuth })(fetchColorService);
