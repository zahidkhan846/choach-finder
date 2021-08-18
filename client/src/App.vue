<template>
  <TheHeader />
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "./components/Layouts/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  methods: {
    async checkUserStatus() {
      await this.$store.dispatch("isUserLoggedIn");
    },
  },
  created() {
    this.checkUserStatus();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap");

:root {
  --primary-color: #61b4b4;
  --medium-color: #451957;
  --secondary-color: #373a3a;

  --danger-color: #e7466a;
  --success-color: #eed085;

  --light-color: #fff;
  --dark-color: #111;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:after,
*:before {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
}

p {
  line-height: 1.6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Mono", monospace;
}

a {
  color: black;
  text-decoration: none;
  font: inherit;
  display: inline-block;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  display: inline-block;
  font: inherit;
}

input,
textarea {
  font: inherit;
  padding: 0.25rem 0.5rem;
}

label {
  display: block;
  font: inherit;
}

img {
  display: block;
}

/* Classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mb-1 {
  margin-bottom: 1rem;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-enter-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
