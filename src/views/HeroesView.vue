<template>
  <h2>All Heroes</h2>
  <Filter @onFilter="onFilter"></Filter>
  <heroes :page="page" :setPages="setPages" :filter="filter"></heroes>
  <paginate :page="page" :pages="pages" :setPage="setPage"></paginate>
</template>

<script>
import Heroes from "../modules/heroes/components/Heroes.vue";
import Paginate from "../modules/heroes/components/Paginate.vue";
import Filter from "../modules/heroes/components/Filter.vue";

export default {
  name: "HeroesView",
  components: {
    Heroes,
    Paginate,
    Filter,
  },
  data() {
    return {
      filter: {
        name: "",
        minPowerLevel: 0,
        maxPowerLevel: 100,
      },
      page: 1,
      pages: 1,
    };
  },
  methods: {
    setPage(page) {
      page = parseInt(page);
      if (page < 1) {
        page = 1;
      }
      if (page > this.pages) {
        page = this.pages;
      }
      this.page = page;
    },
    setPages(pages) {
      this.pages = pages;
    },
    onFilter(newFilter) {
      this.filter.maxPowerLevel = newFilter.maxPowerLevel;
      this.filter.minPowerLevel = newFilter.minPowerLevel;
      this.filter.name = newFilter.name;
      this.page = 1;
    },
  },
};
</script>
