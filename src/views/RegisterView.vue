<template>
  <h2>Register</h2>
  <RegisterForm></RegisterForm>
</template>

<script>
import RegisterForm from "../modules/users/components/RegisterForm.vue";
export default {
  name: "RegisterView",
  components: {
    RegisterForm,
  },
};
</script>
