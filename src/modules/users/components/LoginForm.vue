<template>
  <form @submit.prevent="login()">
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="user.email" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="user.password" required>
    </div>
    <button type="submit">Login</button>
    <RouterLink to="/register"><button>Make an account</button></RouterLink>
  </form>
</template>

<script>
import UserService from '../services/UserService';

export default {
  name: "LoginForm",
  data() {
    return {
      service: new UserService(),
      user: {
        email: "",
        password: "" 
      }
    };
  },
  methods: {
    async login() {
      await this.service.login(this.user)
      .then((response) => {
        this.$router.push({path: '/'});
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
};
</script>

<style>
</style>
