<template>
  <h2>Create Your Hero</h2>
  <HeroForm></HeroForm>
</template>

<script>
import HeroForm from "../modules/heroes/components/HeroForm.vue";

export default {
  name: "CreateHeroView",
  components: {
    HeroForm
  },
};
</script>
