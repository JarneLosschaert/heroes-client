<template>
    <heroes :page="page" :setPages="setPages"></heroes>
    <paginate :page="page" :pages="pages" :setPage="setPage"></paginate>
</template>

<script>
import Heroes from '../modules/heroes/components/Heroes.vue'
import Paginate from '../modules/heroes/components/Paginate.vue'

export default {
    name: 'HeroesView',
    components: {
        Heroes,
        Paginate
    },
    data() {
        return {
            page: 1,
            pages: 2
        }
    },
    methods: {
        setPage(page){
            page = parseInt(page);
            if (page < 1) {
                page = 1;
            }
            if (page > this.pages) {
                page = this.pages;
            }
            this.page = page;
        },
        setPages(pages){
            this.pages = pages;
        }
    }
}
</script>

<style>
body {
    margin-bottom: 7rem;
}

</style>
