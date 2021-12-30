import axios from "axios";

const API_URL = "https://enigmatic-stream-54061.herokuapp.com/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "api/auth/", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "users/", {
      username: user.username,
      role: user.role,
      password: user.password,
      services: user.services,
    });
  }
}

export default new AuthService();
