<template>
    <article>
        <h1>Hero</h1>
        <h3>{{hero.name}}</h3>
        <img :src="hero.image" :alt="hero.name"/>
    </article>
</template>


<script>

export default {
    name: 'HeroDetail',
    props: {
        hero: {
            type: Object,
            required: true
        }
    }
}

</script>

<style>
</style>