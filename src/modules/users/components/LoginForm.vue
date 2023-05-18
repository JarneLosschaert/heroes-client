<template>
  <form class="general-form" @submit.prevent="login()">
    <div class="input">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        v-model="user.email"
        required
      />
    </div>
    <div class="input">
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        v-model="user.password"
        required
      />
    </div>
    <p v-if="error" class="error">Wrong e-mail or password. Please try again.</p>
    <button type="submit">Login</button>
    <button @click="routeRegister">Make an account</button>
  </form>
</template>

<script>
import UserService from "../services/UserService";

export default {
  name: "LoginForm",
  data() {
    return {
      service: new UserService(),
      error: false,
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      await this.service
        .login(this.user, this.succeededLogin, this.failedLogin)
    },
    succeededLogin(data) {
      if (data.authorisation.token) {
        localStorage.setItem("token", data.authorisation.token);
        localStorage.setItem("userName", data.userName);
        this.$router.push({ path: "/profile" });
      }
    },
    failedLogin(error) {
      this.error = true;
      console.error("Error:", error);
    },
    routeRegister() {
      this.$router.push({ path: "/register" });
    },
  },
};
</script>
