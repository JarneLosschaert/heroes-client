<template>
  <section id="heroes">
    <div class="wrapper">
      <div class="loader" v-show="!loaded"></div>
      <hero
        v-show="loaded"
        v-for="hero in heroes.data"
        :key="hero.id"
        :hero="hero"
        :favorites="favorites"
        :isFavorite="isFavorite(hero)"
      ></hero>
    </div>
  </section>
</template>

<script>
import HeroService from "../services/HeroService";
import Hero from "../components/Hero.vue";

export default {
  name: "Heroes",
  components: {
    Hero,
  },
  props: {
    page: {
      default: 1,
    },
    filter: {
      type: Object,
      default: () => {
        return {
          name: "",
          minPowerLevel: 0,
          maxPowerLevel: 100,
        };
      },
    },
    setPages: {
      type: Function,
    },
    favorites: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      service: new HeroService(),
      heroes: [],
      loaded: false,
      favoritesArray: []
    };
  },
  watch: {
    page: {
      handler: async function () {
        if (!this.loaded) return;
        this.loaded = false;
        await this.loadHeroes();
      },
      immediate: true,
    },
    filter: {
      handler: async function () {
        if (!this.loaded) return;
        this.loaded = false;
        await this.loadHeroes();
      },
      deep: true,
      immediate: true,
    },
  },
  async mounted() {
    await this.loadHeroes();
  },
  methods: {
    async loadHeroes() {
      if (this.favorites) {
        this.heroes = await this.service.favorites(this.page);
      } else {
        this.heroes = await this.service.setPage(this.page).all(this.filter);
        this.heroes = this.heroes.data;
        this.setPages(this.heroes.last_page);
      }
      if (this.isToken()) {
          this.favoritesArray = await this.service.favorites();
          this.favoritesArray = this.favoritesArray.data;
      }
      this.loaded = true;
    },
    isToken() {
      return localStorage.getItem("token");
    },
    isFavorite(hero) {
      if (this.favoritesArray) {
        return this.favoritesArray.find((favorite) => {
          return favorite.id === hero.id;
        });
      }
    },
  }
};
</script>

<style>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}
</style>
