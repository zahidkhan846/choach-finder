<template>
  <div>
    <div class="center load" v-if="isLoading">
      <base-card>
        <p>Please wait while we fetching data.</p>
        <h1>Loading...</h1></base-card
      >
    </div>
    <section v-else-if="error" class="center flex">
      <p class="error-text">{{ error }}</p>
      <router-link to="/coaches">Go to the All Coaches</router-link>
    </section>
    <section v-else>
      <header>
        <h1>{{ fullName }}</h1>
        <h2>${{ rate }}/hr</h2>
      </header>
      <main>
        <h2>About the instructure</h2>
        <p class="mb-1">
          {{ desc }}
        </p>
        <div class="tags">
          <h3>Instructure role tags</h3>
          <p class="mb-05">These are the known role tags for this coach.</p>
          <ul>
            <li v-for="area in areas" :key="area">
              <BaseTag>{{ area }}</BaseTag>
            </li>
          </ul>
        </div>
        <base-button link :to="contactLink">Contact Here</base-button>
      </main>
    </section>
    <div class="modal">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "../../config/axiosConfig.js";
import BaseTag from "../../components/UI/BaseTag.vue";

export default {
  components: {
    BaseTag,
  },
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
      error: null,
      isLoading: false,
    };
  },
  methods: {
    async getCurrentCoach() {
      try {
        this.isLoading = true;
        const res = await axios.get(`/all-coaches/${this.id}`);
        if (res.data) {
          this.selectedCoach = res.data;
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
      this.isLoading = false;
    },
  },

  computed: {
    contactLink() {
      return this.$route.path + "/contact";
    },
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    desc() {
      return this.selectedCoach.description;
    },
    areas() {
      return this.selectedCoach.areas;
    },
  },
  created() {
    this.getCurrentCoach();
  },
};
</script>

<style scoped>
section {
  position: relative;
}

header {
  background-color: var(--medium-color);
  color: var(--primary-color);
  height: 60px;

  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

main {
  padding: 1rem;
}

.mb-1 {
  margin-bottom: 1rem;
}

.mb-05 {
  margin-bottom: 0.5rem;
}

ul {
  display: flex;
  gap: 0.5rem;
}

.tags {
  margin-bottom: 1rem;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--light-color);

  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.5);

  border-radius: 5px;
  overflow: hidden;

  height: auto;
  width: 400px;
  z-index: 120;
}

.load {
  margin-top: 2rem;
}

.load h1 {
  padding: 1.5rem;
}

.load p {
  padding: 1rem 1.5rem;
  background-color: var(--success-color);
  font-size: 1.2rem;
}

.flex {
  flex-direction: column;
}

.error-text {
  margin-top: 3rem;
  font-size: 1.5rem;
}

.center a {
  margin-top: 2rem;
  background-color: var(--success-color);
  padding: 1rem 1.5rem;
  border-radius: 5px;
}

.center a:hover {
  opacity: 0.9;
}
</style>
