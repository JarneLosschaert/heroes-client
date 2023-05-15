<template>
    <div id="paginate">
        <img @click="previousPage" class="arrow" src="../../../assets/images/arrow-left.png" alt="arrow left">
        <p>Page {{ page }} of the {{ pages }}</p>
        <img @click="nextPage" class="arrow" src="../../../assets/images/arrow-right.png" alt="arrow right">
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
    color: var(--color-text-accent);
    width: 18vw;
    font-weight: bold;
    margin: 3rem auto;
    text-align: center;
}

.arrow {
    height: 1.5rem;
    cursor: pointer;
}
</style>