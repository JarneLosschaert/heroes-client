<template>
    <form @submit.prevent="register">
        <input placeholder="first name" v-model="firstName"/>
        <input placeholder="last name" v-model="lastName"/>
        <input placeholder="email" v-model="email"/>
        <input placeholder="password" v-model="password"/>
        <button>Register</button>
    </form>
</template>

<script>
export default {
    name: 'RegisterView',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            this.$store.dispatch('register', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input{
    width: 300px;
    height: 30px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
}
</style>
