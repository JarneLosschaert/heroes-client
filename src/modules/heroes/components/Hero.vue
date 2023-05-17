<template>
  <article @click="routeHero" class="hero">
    <img :src="hero.image" :alt="hero.name" />
    <div class="content">
      <h3>{{ hero.name }}</h3>
      <p v-if="hero.translations">{{ getRace() }}</p>
      <div class="flex">
        <p>{{ hero["power-level"] }}</p>
        <img v-if="isFavorite" src="../../../assets/images/hart.png" alt="hart">
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Hero",
  props: {
    hero: {
      type: Object,
      required: true,
    },
    favorites: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    routeHero() {
      this.$router.push({ path: "/hero/" + this.hero.id });
    },
    getRace() {
      if (this.favorites) {
        return this.hero.translations[this.getLanguage()].race
      }
      else {
        return this.hero.translations.race
      }
    },
    getLanguage() {
      return localStorage.getItem("language") || "en";
    },
  }
};
</script>

<style>
.hero {
  display: flex;
  flex-direction: column;
  height: 20rem;
  width: 15vw;
  background-color: var(--color-secondary);
  border-radius: 0.5rem;
}
.hero:hover {
  cursor: pointer;
  background-color: var(--color-primary-variant);
}
.hero img {
  height: 80%;
  width: 100%;
  object-fit: crop;
  border-radius: 0.5rem 0.5rem 0 0;
  background: #5a5a5a;
  text-align: center;
}
.hero .content {
  height: 20%;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
}
.hero h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.hero p {
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

.hero .flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hero .flex img {
  height: 1rem;
  width: 1rem;
  background: none;
}
</style>
