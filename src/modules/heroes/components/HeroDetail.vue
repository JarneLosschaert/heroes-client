<template>
  <article class="hero-detail">
    <div class="hero-detail-image">
      <img :src="hero.image" :alt="hero.name" />
    </div>
    <div class="hero-detail-content">
      <h3 @click="routeHero">{{ hero.name }}</h3>
      <p>{{ hero.birthday }}</p>
      <p v-if="hero.translations">{{ this.hero.translations.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      hadTranslations: false,
    };
  },
  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.hero-detail {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70vh;
}
.hero-detail-image {
  height: 100%;
  width: 50%;
}
.hero-detail-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
}
.hero-detail-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  padding-left: 2rem;
}
.hero-detail-content h3 {
  font-size: 2.5rem;
  color: var(--color-text-accent);
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.hero-detail-content p {
  font-size: 1rem;
  font-weight: bold;
}
</style>
