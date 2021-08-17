<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style scoped>
.card {
  width: 500px;
  overflow: hidden;

  box-shadow: 0 20px 50px rgba(59, 43, 91, 0.7);

  border-radius: 10px;
}

@media (min-width: 500px) {
  .card {
    width: 450px;
  }
}
</style>
