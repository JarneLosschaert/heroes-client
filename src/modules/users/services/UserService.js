const url = "http://heroes.laravel/api";

export default class UserService {
  getToken() {
    return localStorage.getItem("token");
  }

  async register(user, success, failed) {
    fetch(url + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    })
      .then((data) => {
        success(data);
      })
      .catch((error) => {
        failed(error);
      });
  }

  async login(user, success, failed) {
    fetch(url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        success(data);
      })
      .catch((error) => {
        failed(error);
      });
  }

  async update(favorites) {
    const fullUrl = url + "/user";
    fetch(fullUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.getToken(),
      },
      body: JSON.stringify({
        favoriteHeroes: favorites,
      }),
    })
      .catch((error) => {
        console.log(error);
      });
  }
}
