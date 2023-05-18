<template>
  <h2>Create hero</h2>
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
