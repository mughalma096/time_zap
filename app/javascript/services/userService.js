import http from "./httpService";
import { apiUrl } from "../config.json";

const userUrl = `${apiUrl}/users`;

export async function register({ name, email, password }) {
  const { data } = await http.post(userUrl, {
    user:{
      name: name,
      email: email,
      password: password
    }
  });
  localStorage.setItem("token", JSON.stringify({ auth_token: null, user: data }));
}

export async function updateUser(id, name, email, password) {
  const { data } = await http.put(userUrl + '/' + id, {
    user: {
      name: name,
      email: email,
      password: password
    }
  });
  localStorage.setItem("token", JSON.stringify({ auth_token: null, user: data }));
}

export async function users() {
  const { data: users } = await http.get(userUrl);
  return users;
}

export async function getUser(id) {
  const { data: user } = await http.get(userUrl + '/' + id );
  return user;
}

export function deleteUser(id) {
  return http.delete(userUrl + '/' + id);
}

export default {
  users,
  register,
  getUser,
  deleteUser
}