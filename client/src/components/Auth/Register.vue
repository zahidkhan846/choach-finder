<template>
  <div class="center">
    <base-card>
      <form @submit.prevent="handleFormSubmit">
        <h2>Register</h2>
        <div class="form-control">
          <label for="email">Full Name</label
          ><input type="text" id="name" v-model.trim="name" />
          <small :class="{ active: userErrors.name }">{{
            userErrors.name || "Must not be empty."
          }}</small>
        </div>
        <div class="form-control">
          <label for="email">Email</label
          ><input type="text" id="email" v-model.trim="email" />
          <small :class="{ active: userErrors.email }">{{
            userErrors.email || "Must be a valid email address."
          }}</small>
        </div>
        <div class="form-control">
          <label for="password">Password</label
          ><input type="password" id="password" v-model.trim="password" />
          <small :class="{ active: userErrors.password }">{{
            userErrors.password || "Must be 6 characters long."
          }}</small>
        </div>
        <div class="form-control">
          <label for="confirm-password">Confirm Password</label
          ><input
            type="password"
            id="confirm-password"
            v-model.trim="confirmPassword"
            @blur="errors.confirmPassword = null"
          />
          <small :class="{ active: errors.confirmPassword }">{{
            errors.confirmPassword || "Please confirm your password."
          }}</small>
        </div>
        <div class="form-control btn-group">
          <base-button mode="light" link to="/login">GO TO LOGIN</base-button>
          <base-button type="submit">REGISTER</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    async handleFormSubmit() {
      if (this.password !== this.confirmPassword) {
        this.errors.confirmPassword = "Password does not match.";
        return;
      }
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch("signUpAction", newUser);
      this.$router.replace("/login");
    },
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
  },
  computed: {
    userErrors() {
      return this.$store.getters.userErrors;
    },
  },
};
</script>

<style scoped>
.center {
  margin-top: 1.5rem;
}

form {
  padding: 1rem;
}

.form-control {
  margin-bottom: 1rem;
}

.form-control:last-child {
  margin-bottom: 0;
}

h2 {
  margin-bottom: 1rem;
}

.form-control input {
  width: 100%;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 3px;
}

.form-control input:focus {
  border: 1px solid black;
}

.btn-group {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

small {
  color: rgb(155, 152, 152);
  font-style: italic;
}

h2 {
  font-size: 2rem;
}

.active {
  color: var(--danger-color);
}
</style>
