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
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      await this.service.login(this.user).catch((error) => {
        console.log(error);
      });
      this.$router.push({ path: "/profile" });
    },
    routeRegister() {
      this.$router.push({ path: "/register" });
    },
  },
};
</script>

<style></style>
