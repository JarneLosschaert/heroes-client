<template>
  <div class="profile">
    <div class="loggedIn" v-if="isToken">
        <p>You are logged in as {{ user() }}</p>
        <button @click="logout()">Logout</button>
    </div>
    <div class="buttons" v-else>
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

.profile .buttons {
    margin: 8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
}

.profile button{
    width: 10rem;
    height: 3rem;
    border-radius: 5px;
    background-color: var(--color-primary);
    color: white; 
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
}

button:hover{
  background-color: var(--color-primary-dark);
}

.loggedIn {
  margin: 8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}

.loggedIn p{
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-text);
}

</style>
