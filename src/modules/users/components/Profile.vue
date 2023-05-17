<template>
  <div class="profile">
    <div v-if="isToken">
        <p class="announcement">You are logged in as {{ user() }}</p>
        <button @click="logout()">Logout</button>
    </div>
    <div v-else>
        <RouterLink to="/login"><button>Login</button></RouterLink>
        <RouterLink to="/register"><button>Register</button></RouterLink>
    </div>
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
      this.$router.push({ path: "/login" });
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

.profile div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 30%;
  margin: auto;
}

.profile div button, .profile div a {
  width: 100%;
}

</style>
