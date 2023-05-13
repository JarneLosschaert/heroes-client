<template>
    <div id="paginate">
        <img @click="previousPage" src="../../../assets/images/arrow-left.png" alt="arrow left">
        <p>Page {{ page }} of the {{ pages }}</p>
        <img @click="nextPage" src="../../../assets/images/arrow-right.png" alt="arrow right">
    </div>
</template>


<script>
export default {
    name: 'Paginate',
    props: {
        page: {
            type: Object,
            required: true
        },
        pages: {
            type: Object,
            required: true
        },
        setPage: {
            type: Function,
            required: true
        }
    },
    methods: {
        routeHero() {
            this.$router.push({path: '/hero/' + this.hero.id});
        },
        nextPage() {
            this.setPage(this.page + 1);
        },
        previousPage() {
            this.setPage(this.page - 1);
        }
    },
}

</script>

<style>
#paginate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    color: var(--color-text-accent);
    bottom: 3rem;
    left: 43%;
    width: 14%;
    font-weight: bold;
}

img {
    height: 1.5rem;
    cursor: pointer;
}
</style>