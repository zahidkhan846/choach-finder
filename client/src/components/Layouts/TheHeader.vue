<template>
  <header>
    <div>
      <img src="../../assets/logo.png" alt="logo" />
      <h2>Skill<span>Find</span></h2>
    </div>
    <nav>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--secondary-color);
  color: var(--success-color);
  padding: 0 2rem;

  height: 70px;

  position: sticky;
  top: 0;
  left: 0;

  z-index: 100;
}

img {
  height: 40px;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
}

span {
  color: var(--primary-color);
}

ul {
  display: flex;
  align-items: center;
  gap: 1rem;
}

a {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: transparent;
  color: var(--light-color);
  border: none;
  outline: none;

  transition: background 0.3s ease;
}

a:hover,
a:active,
a.router-link-active {
  background: var(--success-color);
  color: var(--dark-color);
}

@media (max-width: 500px) {
  header {
    justify-content: center;

    flex-direction: column;
    gap: 0.5rem;

    height: auto;

    padding: 1rem 0;
  }
}
</style>
