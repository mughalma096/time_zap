import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(response => {
  return response;
}, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

function setAuthToken(authToken) {
  // axios.interceptors.request.use((config) => {
  //   config.params = config.params || {};
  //   config.params['auth_token'] = authToken;
  //   return config;
  // });
  axios.defaults.params = { auth_token: authToken };
  // axios.defaults.headers.common["x-auth-token"] = authToken;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setAuthToken
};
