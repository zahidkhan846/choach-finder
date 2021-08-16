<template>
  <form @submit.prevent="handleFormSubmit">
    <h2>Enter your message</h2>
    <div class="form-control">
      <label for="name">Your Name</label>
      <input type="text" id="name" v-model.trim="name" />
    </div>
    <div class="form-control">
      <label for="email">Your Email</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model.trim="message" />
    </div>
    <div class="btns">
      <base-button type="submit">SEND</base-button>
      <base-button link :to="$router.go(1)" mode="danger">CANCEL</base-button>
    </div>
  </form>
</template>

<script>
export default {
  computed: {},
  methods: {
    handleFormSubmit() {
      if (this.name === "" || this.email === "" || this.message === "") return;
      const newMessage = {
        name: this.name,
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id,
      };
      this.$store.dispatch("requests/addRequest", newMessage);
      this.$router.push("/coaches");
    },
  },
  data() {
    return {
      email: "",
      name: "",
      message: "",
    };
  },
};
</script>

<style scoped>
form {
  padding: 1rem;
}

h2 {
  margin-bottom: 0.5rem;
}

.form-control {
  margin-bottom: 1rem;
}

.btns {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

input,
textarea {
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid lightgrey;
  outline: none;
}

input:focus,
textarea:focus {
  border: 1px solid var(--secondary-color);
}
</style>
