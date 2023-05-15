<template>
    <div v-if="isToken">
        <p>You are logged in as {{ user() }}</p>
        <button @click="logout()">Logout</button>
    </div>
    <div v-else>
        <RouterLink to="/login"><button>Login</button></RouterLink>
        <RouterLink to="/register"><button>Register</button></RouterLink>
    </div>
    
</template>

<script>

export default {
  name: "Profile",
  methods: {
    user() {
      if (localStorage.getItem("userName")) {
        return localStorage.getItem("userName");
      } else {
        return null;
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    isToken() {
      return localStorage.getItem("token") !== null;
    },
  },
};
</script>

<style>
</style>