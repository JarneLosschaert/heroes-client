<template>
    <article @click="routeHero" class="hero">
        <img :src="hero.image" :alt="hero.name"/>
        <div>
            <h3>{{ hero.name }}</h3>
            <p v-if="hero.translations">{{ hero.translations.race }}</p>
        </div>
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
    methods: {
        routeHero() {
            this.$router.push({path: '/hero/' + this.hero.id});
        }
    }
}

</script>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        height: 20rem;
        width: 15vw;
        background-color: var(--color-secondary);
        border-radius: 0.5rem;
    }
    .hero:hover {
        cursor: pointer;
        background-color: var(--color-primary-variant);
    }
    .hero img {
        height: 80%;
        width: 100%;
        object-fit: crop;
        border-radius: 0.5rem 0.5rem 0 0;
        background: #5A5A5A;
        text-align: center;
    }
    .hero div {
        height: 20%;
        display: flex;
        flex-direction: column;
        margin: 0.5rem;
    }
    .hero h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    .hero p {
        font-size: 0.8Rem;
    }
</style>