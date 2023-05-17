const url = "http://heroes.laravel/api";

export default class UserService {
  getToken() {
    return localStorage.getItem("token");
  }

  async register(user) {
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
    });
  }

  async login(user) {
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
        if (data.authorisation.token) {
          localStorage.setItem("token", data.authorisation.token);
          localStorage.setItem("userName", data.userName);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async update(favorites) {
    console.log(favorites);
    const fullUrl = url + "/user";
    fetch(fullUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.getToken(),
      },
      body: JSON.stringify({
        "favoriteHeroes": favorites
      })
    }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            }
        )
        .catch((error) => {
            console.error("Error:", error);
            
    });
  }
}
