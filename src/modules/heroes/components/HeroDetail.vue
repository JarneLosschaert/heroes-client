<template>
  <article class="hero-detail">
    <div class="hero-detail-image">
      <img :src="hero.image" :alt="hero.name" />
    </div>
    <div class="hero-detail-content">
      <h3 @click="routeHero">{{ hero.name }}</h3>
      <p><em>Birthday: </em>{{ hero.birthday }} ({{ age() }} years old)</p>
      <p v-if="hero.translations"><em>Race: </em>{{ this.hero.translations.race }}</p>
      <p v-if="hero && !editing"><em>Power level: </em>{{ getPowerLevel() }}</p>
      <p v-if="hero && editing"><em>Power level: </em><input type="number" :placeholder="getPowerLevel()" v-model="powerLevel" min="0" max="100"></p>
      <p v-if="hero.translations">{{ this.hero.translations.description }}</p>
      <button v-if="!editing" @click="editPowerLevel()"><p>Update power level</p></button>
      <button v-if="editing" @click="savePowerLevel()"><p>Save power level</p></button>
      <button @click="deleteHero()"><p>Delete hero</p></button>
    </div>
  </article>
</template>

<script>
import HeroService from '../services/HeroService';

export default {
  name: "Hero",
  data() {
    return {
      service: new HeroService(),
      hadTranslations: false,
      editing: false,
      powerLevel: 0,
    };
  },
  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteHero() {
      this.service.delete(this.hero.id);
    },
    editPowerLevel() {
      this.powerLevel = this.getPowerLevel();
      this.editing = true;
    },
    savePowerLevel() {
      this.editing = false;
      this.hero["power-level"] = this.powerLevel;
      this.service.update(this.hero);
    },
    age() {
      const today = new Date();
      const birthday = new Date(this.hero.birthday);
      const age = today.getFullYear() - birthday.getFullYear();
      const month = today.getMonth() - birthday.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        return age - 1;
      }
      return age;
    },
    getPowerLevel() {
      if (this.hero["power-level"]) {
        return this.hero["power-level"];
      }
      return this.hero.powerLevel;
    }
  }
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
  line-height: 1.3rem;
}

.hero-detail-content p em {
  font-style: normal;
  color: var(--color-text-accent);
}

.hero-detail-content button {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: 0.2rem;
  border-radius: 1.5rem;
}

.hero-detail-content input {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: 0 0.5rem;
  width: 3rem;
  border: none;
  border-radius: 0.2rem;
}

</style>
