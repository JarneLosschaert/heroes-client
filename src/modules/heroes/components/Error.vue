<template>
  <div>
    <div class="popup">
      <p>{{ errorMessage }}</p>
      <button @click="hideError">Ok</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
    hideError: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-primary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}
.popup button {
    background-color: var(--color-secondary);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-text);
    cursor: pointer;
}
.popup p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}
</style>
