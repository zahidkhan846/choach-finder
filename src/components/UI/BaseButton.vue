<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button,
a {
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  background-color: var(--medium-color);
  color: var(--light-color);

  border-radius: 5px;

  transition: transform 0.3s ease;
}

button:hover {
  transform: scale(1.025);
}

a:hover {
  opacity: 0.9;
}

button:active {
  transform: scale(0.975);
}

.light {
  background-color: var(--light-color);
  color: var(--dark-color);
  box-shadow: none;
  border: none;
  outline: none;

  transition: all 0.3s ease;
}

.light:hover {
  background-color: var(--primary-color);
  color: var(--light-color);
}

.danger {
  background-color: var(--danger-color);
  color: var(--light-color);
}

.medium {
  background-color: var(--success-color);
  color: var(--dark-color);
}

.primary {
  background-color: var(--primary-color);
  color: var(--light-color);
}
</style>
