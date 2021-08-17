<template>
  <section>
    <base-card>
      <header><h2>Find your coach</h2></header>
      <div class="filter-group">
        <div class="filter">
          <label for="frontend">Frontend</label>
          <input type="checkbox" id="frontend" checked @change="setSelector" />
        </div>
        <div class="filter">
          <label for="backend">Backend</label>
          <input type="checkbox" id="backend" checked @change="setSelector" />
        </div>
        <div class="filter">
          <label for="mobile">Mobile</label>
          <input type="checkbox" id="mobile" checked @change="setSelector" />
        </div>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  name: "FilterCoach",
  data() {
    return {
      filters: { frontend: true, backend: true, mobile: true },
    };
  },
  emits: ["change-filter"],
  methods: {
    setSelector(event) {
      const checkboxId = event.target.id;
      const isChecked = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [checkboxId]: isChecked,
      };

      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
section {
  margin-bottom: 0.5rem;
}

header {
  background-color: var(--primary-color);
  padding: 0.25rem 1rem;
}

.filter-group {
  padding: 0.5rem 1rem;
  display: flex;
  gap: 1rem;
}

.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

label {
  cursor: pointer;
}
</style>
