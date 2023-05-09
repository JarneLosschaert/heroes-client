<template>
    <div>
        <h1>Heroes</h1>
        <div class="hero">
            <div>
                <img :src="hero.image" :alt="hero.name" />
                <h2>{{ hero.name }}</h2>
                <h2>{{ hero.description }}</h2>
                <h2>{{ hero.race }}</h2>
            </div>
        </div>       
    </div>
</template>

<script>
export default {
    name: 'HeroView',
    computed: {
        hero() {
            return{
                hero: {}
            }
        }
    }
}
</script>

<style>

</style>