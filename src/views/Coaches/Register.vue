<template>
  <section>
    <base-card>
      <h1>Register as coach</h1>
      <RegisterForm />
    </base-card>
  </section>
</template>

<script>
import RegisterForm from "../../components/Coach/RegisterForm.vue";

export default {
  components: {
    RegisterForm,
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

h1 {
  font-size: 2rem;
  padding: 0.5rem 1rem;
}
</style>
