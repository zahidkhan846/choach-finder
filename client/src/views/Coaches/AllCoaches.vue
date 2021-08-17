<template>
  <div>
    <h1>All Coaches</h1>
    <Coaches />
  </div>
</template>

<script>
import Coaches from "../../components/Coach/Coaches.vue";

export default {
  components: {
    Coaches,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
