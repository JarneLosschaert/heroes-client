<template>
  <form class="form" @submit.prevent="login()">
    <div class="input">
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Email" v-model="user.email" required>
    </div>
    <div class="input">
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Password" v-model="user.password" required>
    </div>
    <div class="buttons">
    <button type="submit">Login</button>
    <RouterLink to="/register"><button>Make an account</button></RouterLink>
    </div>
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

.form .buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
}

button{
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
