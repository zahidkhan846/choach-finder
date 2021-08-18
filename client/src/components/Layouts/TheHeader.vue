<template>
  <header>
    <div>
      <h2>Skill<span>Find</span></h2>
    </div>
    <nav>
      <ul>
        <li><router-link to="/coaches">Coaches</router-link></li>
        <li>
          <router-link to="/requests" v-if="isAuth && isCoach"
            >Requests</router-link
          >
        </li>
        <li>
          <router-link to="/register-user" v-if="!isAuth">Sign Up</router-link>
          <button @click="handleLogout" v-if="isAuth">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    isAuth() {
      return this.$store.getters.isAuthenticated;
    },
    isCoach() {
      return this.$store.getters.isCoach;
    },
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("logoutAction");
    },
  },
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
  gap: 0.25rem;
}

a,
button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: transparent;
  color: var(--light-color);
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;

  transition: all 0.3s ease;
}

button {
  border: 2px solid var(--danger-color);
  background: var(--danger-color);
}

button:hover {
  border: 2px solid var(--light-color);
  background: var(--light-color);
  color: var(--danger-color);
}

button:active {
  transform: scale(0.95);
}

a:hover {
  color: var(--primary-color);
}

a:active,
a.router-link-active {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
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
