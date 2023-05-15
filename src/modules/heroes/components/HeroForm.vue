<template>
    <form action="submit">
        <div class="field">
            <label :for="name">Name:</label>
            <input :name="name" :id="name" :placeholder="name" v-model="hero.name" required>
        </div>
        <div class="field">
            <label :for="description">Description:</label>
            <input :name="description" :id="description" :placeholder="description" v-model="hero.description" required>
        </div>
        <div class="field">
            <label :for="powerLevel">Power Level (/100):</label>
            <input type="number" :name="powerLevel" :id="powerLevel" :placeholder="powerLevel" v-model="hero.powerLevel" min="0" max="100" required>
        </div>
        <div class="field">
            <label :for="birthday">Birthday:</label>
            <input type="date" :name="birthday" :id="birthday" :placeholder="birthday" v-model="hero.birthday" required>
        </div>
        <div class="field">
            <label :for="race">Race:</label>
            <input :name="race" :id="race" :placeholder="race" v-model="hero.race" required>
        </div>
        <div class="field">
            <label :for="image">Image:</label>
            <input :name="image" :id="image" :placeholder="image" v-model="hero.image" required>
        </div>
        <button type="submit" @click.prevent="createHero">Create Hero</button>
        <Error v-if="error" :errorMessage="errorMessage" :hideError="hideError"></Error>
    </form>
</template>


<script>
import HeroService from '../services/HeroService'
import Error from './Error.vue'

export default {
    name: 'HeroForm',
    components: {
        Error
    },
    data() {
        return {
            service: new HeroService(),
            error: false,
            errorMessage: '',
            hero: {
                name: '',
                description: '',
                powerLevel: 0,
                birthday: null,
                race: '',
                image: '',
            }
        }
    },
    methods: {
        async createHero() {
            console.log("create");
            if (this.filledIn()) {
                this.errorMessage = 'Please fill in all fields';
                this.error = true;
            } else {
                await this.service.create(this.hero)
            .then((response) => {
                this.$router.push({path: '/'});
            })
            .catch((error) => {
                this.errorMessage = error.response.data.message;
                error = true;
            });
            }
            
        },
        filledIn() {
            return this.hero.name === '' || this.hero.description === '' || this.hero.birthday === null || this.hero.race === '' || this.hero.image === '';
        },
        hideError() {
            return this.error = false;
        }
    }
}

</script>

<style>
    
</style>