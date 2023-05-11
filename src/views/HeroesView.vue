<template>
<div>
    <h1>Heroes</h1>
    <div class="wrapper">
        <div v-for="hero in heroes.data" :key="hero.id">
            <router-link :to="{ name: 'hero', params: { id: hero.id } }">
                <img :src="hero.image" :alt="hero.name" />
                <h2>{{ hero.name }}</h2>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import HeroService from '../modules/heroes/services/HeroService'

export default {
    name: 'Heroes',
    components: {
        // Hero
    },
    props: {
        page: {
            default: 1
        },
        perPage: {
            default: 15
        }
    },
    data() {
        return {
            "service": new HeroService(),
            heroes: [],
            loaded: false
        }
    },
    watch: {
        perPage: {
            handler: async function () {
                if (!this.loaded)
                    return;
                await this.loadHeroes();
            },
            immediate: true
        },
        page: {
            handler: async function () {
                if (!this.loaded)
                    return;
                await this.loadHeroes();
            },
            immediate: true
        }
    },
    computed: {
        heroes() {
            return{
                heroes: []
            }
        }
    },
    async mounted() {
        await this.loadHeroes();
        this.loaded = true;
    },
    methods: {
        async loadHeroes() {
            console.log("load heroes")
            this.heroes = await this.service
                .setPage(this.page)
                .setPerPage(this.perPage)
                .all();
            console.log(this.heroes);
        },
    },
}
</script>

<style>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
