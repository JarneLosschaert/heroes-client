<template>
    <form v-if="isToken" class="general-form" @submit.prevent="createHero()">
        <div class="field">
            <label :for="name">Name:</label>
            <input :name="name" :id="name" placeholder="Name" v-model="hero.name" required>
        </div>
        <div class="field">
            <label :for="description">Description:</label>
            <input :name="description" :id="description" placeholder="Description" v-model="hero.description" required>
        </div>
        <div class="field">
            <label :for="powerLevel">Power Level /100:</label>
            <input type="number" :name="powerLevel" :id="powerLevel" v-model="hero.powerLevel" min="0" max="100" required>
        </div>
        <div class="field">
            <label :for="birthday">Birthday:</label>
            <input type="date" :name="birthday" :id="birthday" v-model="hero.birthday" required>
        </div>
        <div class="field">
            <label :for="race">Race:</label>
            <input :name="race" :id="race" placeholder="Race" v-model="hero.race" required>
        </div>
        <div class="field">
            <label :for="image">Image url:</label>
            <input :name="image" :id="image" placeholder="Image" v-model="hero.image" required>
        </div>
        <button type="submit">Create Hero</button>
    </form>
    <p class="announcement" v-else>You need to be logged in to create a hero</p>
</template>


<script>
import HeroService from '../services/HeroService'

export default {
    name: 'HeroForm',
    data() {
        return {
            service: new HeroService(),
            hero: {
                name: '',
                description: '',
                powerLevel: 50,
                birthday: null,
                race: '',
                image: '',
            }
        }
    },
    methods: {
        async createHero() {
            await this.service.create(this.hero)
            .then((response) => {
                this.$router.push({path: '/'});
            })
        }
    },
    computed: {
        isToken() {
            return localStorage.getItem("token") !== null;
        }
    }
}

</script>

<style>

</style>
