<template>
<form class="form">
    <div class="field">
        <label :for="heroName">Hero name</label>
        <input type="text" :name="heroName" :id="heroName" placeholder="Hero name" v-model="filter.heroName">
    </div>
    <div class="field">
        <label :for="minPwereLvel">Minimum power level:</label>
        <input type="number" :name="minPowerLevel" :id="minPowerLevel" placeholder="Minimum power level" v-model="filter.minPowerLevel">
    </div>
    <div class="field">
        <label :for="maxPwereLvel">Maximum power level:</label>
        <input type="number" :name="maxPowerLevel" :id="maxPowerLevel" placeholder="Maximum power level" v-model="filter.maxPowerLevel">
    </div>
    <button type="submit">search</button>
</form>
</template>

<script>
export default {
    name: 'Filter',
    data() {
        return {
            filter: {
                heroName: '',
                minPowerLevel: 0,
                maxPowerLevel: 100,
            }
        }
    },
    methods: {
        filterHeroes() {
            this.$emit('filter', this.filter);
        }
    }
}
</script>

<style>

.form {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.form button{
    width: 50%;
    height: 2.5rem;
    border-radius: 5px;
    background-color: var(--color-primary);
    color: var(--color-text); 
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    margin-top: auto;
    margin-bottom: 0.63rem;
}

button:hover{
  background-color: var(--color-primary-dark);
}

</style>
