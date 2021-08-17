<template>
  <section class="center mb-1">
    <base-card>
      <div class="control-buttons">
        <base-button @click="loadCoaches">Refresh All Coaches</base-button>
        <base-button link to="/register" mode="light"
          >Register as Coach</base-button
        >
      </div>
    </base-card>
  </section>
  <section class="center">
    <FilterCoach @change-filter="seletedFilters" />
  </section>
  <div class="container">
    <div class="center" v-if="isLoading">
      <base-card>
        <h2 class="load">Loading...</h2>
      </base-card>
    </div>
    <div v-else-if="isModalOpen">
      <teleport to="body">
        <div class="backdrop"></div>
        <div class="modal">
          <header>
            <h2>An error occurred!</h2>
            <button class="modal-button" @click="handleModalClose">
              &#x2715;
            </button>
          </header>
          <main>
            <p>{{ error.message || "Something went wrong." }}</p>
          </main>
        </div>
      </teleport>
    </div>
    <div v-else>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach._id"
          :id="coach._id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :hourly-rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
      <h1 class="center" v-else>No Coaches Found</h1>
    </div>
  </div>
</template>

<script>
import CoachItem from "./CoachItem.vue";
import FilterCoach from "./FilterCoach.vue";

export default {
  name: "Coaches",
  components: {
    CoachItem,
    FilterCoach,
  },
  data() {
    return {
      activeFilters: { frontend: true, backend: true, mobile: true },
      isLoading: false,
      error: {},
      isModalOpen: false,
    };
  },
  methods: {
    handleModalClose() {
      this.isModalOpen = false;
    },
    seletedFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("coaches/fetchAllCoaches");
        this.isLoading = false;
      } catch (error) {
        this.error.message = error.message;
        this.isLoading = false;
        this.isModalOpen = true;
      }
    },
  },
  computed: {
    setError() {
      return this.error.message;
    },
    filteredCoaches() {
      return this.$store.getters["coaches/allCoaches"].filter((c) => {
        if (this.activeFilters.frontend && c.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && c.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.mobile && c.areas.includes("mobile")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.control-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.7rem 1.4rem;
  color: var(--medium-color);
}

.load {
  padding: 1rem;
  background-color: var(--medium-color);
  color: white;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  background-color: var(--light-color);

  max-height: 150px;
  width: 400px;

  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  overflow: hidden;
  z-index: 200;
}

header {
  padding: 0.5rem 1rem;
  background: var(--secondary-color);
  color: var(--success-color);

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

main {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

p {
  font-weight: 600;
  text-align: center;
}

.modal-button {
  cursor: pointer;

  border: none;
  outline: none;
  background: none;
  color: var(--danger-color);
  font-size: 1.5rem;
  font-weight: bold;

  transition: transform 1s ease;
}

.modal-button:hover {
  transform: rotate(180deg);
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
}
</style>
