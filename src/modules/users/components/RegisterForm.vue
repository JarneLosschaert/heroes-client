<template>
  <form class="form" @submit.prevent="register()">
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
    <div class="buttons">
    <button type="submit">Register</button>
    <RouterLink to="/login"><button>Already have an account</button></RouterLink>
    </div>
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

.form .buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
}

.form button{
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    background-color: var(--color-primary);
    color: var(--color-text); 
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
}

button:hover{
  background-color: var(--color-primary-dark);
}

.input {
  display: flex;
  flex-direction: column;
}

.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: var(--color-primary-light);
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

</style>
