<template>
  <form @submit.prevent="login">
    <input placeholder="email" v-model="email" />
    <input placeholder="password" v-model="password" />
    <button>Login</button>
  </form>
  <RouterLink to="/register"><button>Register</button></RouterLink>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style>

</style>
