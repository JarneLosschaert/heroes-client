<template>
  <section id="heroes">
    <h2>Your heroes</h2>
    <div class="wrapper">
      <div class="loader" v-show="!loaded"></div>
      <hero
        v-show="loaded"
        v-for="hero in heroes.data"
        :key="hero.id"
        :hero="hero"
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
    setPages: {
      type: Function,
      required: true
    },
  },
  data() {
    return {
      service: new HeroService(),
      heroes: [],
      loaded: false,
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
  },
  async mounted() {
    await this.loadHeroes();
  },
  methods: {
    async loadHeroes() {
      this.heroes = await this.service
        .setPage(this.page)
        .all();
      this.heroes = this.heroes.data;
      this.setPages(this.heroes.last_page);
      this.loaded = true;
    }
  },
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
