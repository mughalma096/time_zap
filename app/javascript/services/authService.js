import http from "./httpService";
import { authToken, apiUrl, rootUrl  } from "../config.json";

const signInPath = `${rootUrl}/users/sign_in`;

http.setAuthToken(getAuthToken());

export async function login(email, password) {
  const { data: auth_token } = await http.post(signInPath, { session: { email, password } });
  localStorage.setItem(authToken, JSON.stringify(auth_token));
}

export function loginWithAuthToken(auth_token) {
  localStorage.setItem(authToken, auth_token.toString());
}

export function logout() {
  localStorage.removeItem(authToken);
}

export function getCurrentUser() {
  try {
    let { user } = JSON.parse(localStorage.getItem(authToken));
     return user;
  } catch (ex) {
    return null;
  }
}

export function getAuthToken() {
  try {
    let { auth_token } = JSON.parse(localStorage.getItem(authToken))
    return auth_token;
  } catch (ex) {
    return null;
  }

}

export default {
  login,
  logout,
  getAuthToken,
  getCurrentUser,
  loginWithAuthToken
};
