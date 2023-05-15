<template>
  <form @submit.prevent="register()">
    <div>
      <label for="username">Name:</label>
      <input type="text" id="username" v-model="user.name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="user.email" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="user.password" required>
    </div>
    <button type="submit">Register</button>
    <RouterLink to="/login"><button>Already have an account</button></RouterLink>
  </form>
</template>

<script>
import UserService from '../services/UserService';

export default {
  name: "RegisterForm",
  data() {
    return {
      service: new UserService(),
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async register() {
      await this.service.register(this.user)
      .then((response) => {
        this.$router.push({path: '/login'});
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
