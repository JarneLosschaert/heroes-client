<template>
    <article @click="routeHero">
        <h3>{{hero.name}}</h3>
        <p>({{ hero.translations.race }})</p>
        <img :src="hero.image" :alt="hero.name"/>
    </article>
</template>


<script>
export default {
    name: 'Hero',
    props: {
        hero: {
            type: Object,
            required: true
        }
    },
    computed: {
        heroImage() {
            return require('../../../assets/images/heroes/' + this.hero.image);
        }
    },
    methods: {
        routeHero() {
            this.$router.push({path: '/hero/' + this.hero.id});
        }
    },
}

</script>

<style>
</style>