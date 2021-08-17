<template>
  <BaseCard>
    <li>
      <header>
        <h3>{{ fullName }}</h3>
        <h4>${{ hourlyRate }}<small>/hr</small></h4>
      </header>
      <main>
        <ul>
          <li v-for="area in areas" :key="area">
            <BaseTag>{{ area }}</BaseTag>
          </li>
        </ul>
        <div class="actions">
          <router-link :to="detailLink">Details</router-link>
          <router-link :to="contactLink">Contact</router-link>
        </div>
      </main>
    </li>
  </BaseCard>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
import BaseTag from "../UI/BaseTag.vue";

export default {
  name: "CoachItem",
  components: { BaseCard, BaseTag },
  props: ["id", "firstName", "lastName", "hourlyRate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },

    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    detailLink() {
      return `${this.$route.path}/${this.id}`;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;

  align-items: center;

  background-color: var(--dark-color);
  color: var(--light-color);

  padding: 0.5rem 1.5rem;
}

h3 {
  font-size: 1.5rem;
}

ul {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
  padding: 0.5rem 0.5rem;
}

.actions {
  display: flex;
  flex-direction: row-reverse;
}

a {
  background-color: var(--success-color);
  padding: 0.5rem 1rem;
}

a:last-child {
  border-radius: 10px 0 0 0;
  background-color: var(--secondary-color);
  color: var(--light-color);
}

a:hover {
  opacity: 0.9;
}
</style>
