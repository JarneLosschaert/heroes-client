<template>
<div>
    <h1>Heroes</h1>
    <div class="wrapper">
        <div v-for="hero in heroes" :key="hero.id">
            <router-link :to="{ name: 'hero', params: { id: hero.id } }">
                <img :src="hero.image" :alt="hero.name" />
                <h2>{{ hero.name }}</h2>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HeroesView',
    computed: {
        heroes() {
            return{
                heroes: []
            }
        }
    },
    async mounted() {
        this.heroes = await fetch("url")
    }
}
</script>

<style>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
