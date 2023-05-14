<template>
  <div class="loader" v-show="!loaded"></div>
  <HeroDetail v-show="loaded" :hero="hero"></HeroDetail>
</template>

<script>
import HeroDetail from "../modules/heroes/components/HeroDetail.vue";
import HeroService from "../modules/heroes/services/HeroService";

export default {
  name: "HeroDetailView",
  components: {
    HeroDetail,
  },
  data() {
    return {
      service: new HeroService(),
      hero: false,
      loaded: false,
    };
  },
  async mounted() {
    await this.loadHero();
    this.loaded = true;
  },
  methods: {
    async loadHero() {
      this.hero = await this.service.find(this.heroId);
      this.hero = this.hero.data;
      console.log(this.hero);
    },
  },
  computed: {
    heroId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
