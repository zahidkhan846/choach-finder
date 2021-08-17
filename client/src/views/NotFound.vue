<template>
  <div class="center text">
    <base-card>
      <h1>Page Not Found - 404</h1>
      <div class="center link">
        <router-link to="/coaches">Go Back</router-link>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  background-color: var(--primary-color);
  padding: 1rem;
}

.text {
  margin-top: 2rem;
}

.link {
  padding: 1rem;
  background-color: var(--medium-color);
}

a {
  text-transform: uppercase;
  color: var(--light-color);
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.75);
  padding: 0.75rem 1.5rem;
  background-color: rgb(100, 11, 100);
}

a:hover {
  background-color: var(--success-color);
  color: var(--dark-color);
}
</style>
