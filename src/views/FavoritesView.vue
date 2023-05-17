<template>
  <h2>Your Favorite Heroes</h2>
  <p class="announcement" v-if="!isToken">
    You need to be logged in to see your favorites
  </p>
  <div v-else>
    <heroes :favorites="true"></heroes>
  </div>
</template>

<script>
import Heroes from "../modules/heroes/components/Heroes.vue";

export default {
  name: "FavoritesView",
  components: {
    Heroes,
  },
  computed: {
    isToken() {
      return localStorage.getItem("token") !== null;
    },
  },
};
</script>
