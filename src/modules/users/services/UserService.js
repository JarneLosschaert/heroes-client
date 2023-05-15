const url = "http://heroes.laravel/api";

export default class UserService {
    async register(user) {
        fetch(url + "/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": user.name,
                "email": user.email,
                "password": user.password
            }),
        })
    }

    async login(user) {
        fetch(url + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": user.email,
                "password": user.password
            }),
            credentials: 'include'
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(document.cookie);
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            })
    }
}