<template>
  <span class="tag">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "BaseTag",
};
</script>

<style scoped>
.tag {
  display: inline-block;
  background-color: var(--primary-color);
  padding: 0.35rem 0.7rem;
  border-radius: 25px;

  color: var(--light-color);
  text-transform: uppercase;
  font-size: 12px;
}
</style>
