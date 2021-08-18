<template>
  <div v-if="isModalOpen">
    <teleport to="body">
      <div class="backdrop"></div>
      <div class="modal">
        <header>
          <h2>An error occurred</h2>
          <button class="modal-button" @click="handleModalClose">
            &#x2715;
          </button>
        </header>
        <main>
          <p>{{ error.message || "Something went wrong!" }}</p>
        </main>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    error: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    handleModalClose() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
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
