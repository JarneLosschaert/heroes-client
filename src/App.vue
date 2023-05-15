<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <body>
    <header>
      <nav>
        <ul>
          <li>
            <RouterLink id="logo" to="/">
              <img src="./assets/images/logo.png" alt="logo" />
            </RouterLink>
          </li>
          <ul>
            <li>
              <RouterLink
                v-bind:class="{ accent: isCurrentRoute('/') }"
                to="/"
              >
                Your Heroes
              </RouterLink>
            </li>
            <li>
              <RouterLink
                v-bind:class="{ accent: isCurrentRoute('/create-hero') }"
                to="/create-hero"
              >
                Create Hero
              </RouterLink>
            </li>
            <li>
              <div id="language" @click="toggleLanguage">
                {{ getLanguage() }}
              </div>
            </li>
            <li>
              <RouterLink id="profile" to="/login">
                <img src="./assets/images/profile.png" alt="profile" />
              </RouterLink>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
    <main>
      <RouterView :key="viewKey"/>
    </main>
  </body>
</template>

<script>

export default {
  data() {
    return {
      viewKey: 0,
      selectedLanguage: localStorage.getItem("language") || "en",
    };
  },
  mounted() {
    if (localStorage.getItem("language") === null) {
      localStorage.setItem("language", "en");
    }
  },
  methods: {
    isCurrentRoute(route) {
      return this.$route.path === route;
    },
    toggleLanguage() {
      if (this.selectedLanguage === "en") {
        this.selectedLanguage = "nl";
        localStorage.setItem("language", "nl");
      } else {
        this.selectedLanguage = "en";
        localStorage.setItem("language", "en");
      }
      this.viewKey++;
    },
    getLanguage() {
      if (this.selectedLanguage === "nl") {
        return "Nederlands";
      } else {
        return "English"
      }
    },
  },
};
</script>

<style scoped>
.accent {
  color: var(--color-text-accent);
}

header {
  height: 5rem;
  margin: 2rem 0;
}

nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  font-size: 1.2rem;
  font-weight: bold;
}

#logo img {
  height: 5rem;
  margin: auto;
}

#profile img {
  height: 3rem;
  margin: auto;
}

#language {
  cursor: pointer;
  padding: 0.4rem 0.5rem;
  background-color: var(--color-button);
  border-radius: 0.25rem;
}
</style>
