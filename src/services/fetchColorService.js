import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = (type, endpoint, data) => {
  switch (type) {
    case "GET": {
      return axiosWithAuth().get(endpoint);
    }
    case "POST": {
      return axiosWithAuth().post(endpoint);
    }
    case "DELETE": {
      return axiosWithAuth().delete(endpoint);
    }
    case "PUT": {
      return axiosWithAuth().put(endpoint, data);
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      break;
    }
  }
};

export default fetchColorService;
