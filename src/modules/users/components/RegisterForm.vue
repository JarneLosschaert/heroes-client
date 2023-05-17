<template>
  <form class="general-form" @submit.prevent="register()">
    <div class="input">
      <label for="username">Name:</label>
      <input type="text" id="username" placeholder="Name" v-model="user.name" required>
    </div>
    <div class="input">
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Email" v-model="user.email" required>
    </div>
    <div class="input">
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Password" v-model="user.password" required>
    </div>
    <button type="submit">Register</button>
    <button @click="routeLogin">Already have an account</button>
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
    },
    routeLogin(){
      this.$router.push({path: '/login'});
    }
  }
};
</script>

<style>

</style>
