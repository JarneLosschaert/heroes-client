<template>
<form class="filter" @submit.prevent="onFilter(this.filter)">
    <div class="field">
        <label :for="name">Hero name:</label>
        <input type="text" :name="name" :id="name" placeholder="Hero name" v-model="filter.name">
    </div>
    <div class="field">
        <label :for="minPowerLevel">Minimum power level:</label>
        <input type="number" :name="minPowerLevel" :id="minPowerLevel" placeholder="Minimum power level" v-model="filter.minPowerLevel" min="0" max="100">
    </div>
    <div class="field">
        <label :for="maxPowerLevel">Maximum power level:</label>
        <input type="number" :name="maxPowerLevel" :id="maxPowerLevel" placeholder="Maximum power level" v-model="filter.maxPowerLevel" min="0" max="100">
    </div>
    <button type="submit">Search</button>
</form>
<hr>
</template>

<script>
export default {
    name: 'Filter',
    data() {
        return {
            filter: {
                name: '',
                minPowerLevel: 0,
                maxPowerLevel: 100,
            }
        }
    },
    methods: {
        onFilter(filter) {
            this.$emit('onFilter', filter);
        }
    }
}
</script>

<style>
.filter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.filter div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.filter div, .filter button {
    width: 15vw;
}

.filter button{
    height: 50%;
    margin-top: auto;
}

hr {
    margin: 1rem 0;
    color: var(--color-text);
}
</style>
