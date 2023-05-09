<template>
    <form @submit.prevent="login">
<input placeholder="email" v-model="email"/>
<input placeholder="password" v-model="password"/>
<button>Login</button>
    </form>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', {
                username: this.username,
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
